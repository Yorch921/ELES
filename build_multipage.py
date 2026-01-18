
import os
import re

# Configuration

PAGES = {
    'index.html': ['HOME_hero.html'], 
    'method.html': ['METHOD parte 1.html', 'METHOD parte 2.html', 'METHOD parte 3.html', 'METHOD parte 4.html'],
    'workouts.html': ['WORKOUTS parte 1.html', 'WORKOUTS parte 2.html', 'WORKOUTS parte 3.html'],
    'faq.html': ['FAQ.html'], 
    'club.html': ['CLUB_content.html'],
    'shop.html': [],
    'auth.html': ['AUTH_content.html']
}

LINK_MAP = {
    # Home
    r'https?://elesclub\.com/home-page': 'index.html',
    r'https?://eles\.dominacode\.com/inicio': 'index.html',
    r'https?://elesclub\.com/?$': 'index.html', 
    
    # Method
    r'https?://elesclub\.com/method': 'method.html',
    r'https?://elesclub\.com/the-method': 'method.html',
    
    # Workouts
    r'https?://elesclub\.com/workouts': 'workouts.html',
    
    # FAQ
    r'https?://elesclub\.com/faq': 'faq.html',
    
    # Club
    r'https?://elesclub\.com/club': 'club.html',
    
    # Shop
    r'https?://elesclub\.com/shop': 'shop.html',
    
    # Anchors
    r'https?://eles\.dominacode\.com/sign-up': '#signup',
    r'https?://eles\.dominacode\.com/perfil': 'auth.html',
    r'https?://eles\.dominacode\.com/tienda/carrito': '#cart',
    r'https?://eles\.dominacode\.com/politica-privacidad-2': '#privacy',
    r'https?://eles\.dominacode\.com/politica-cookies': '#cookies',
}


def extract_content(content, fname="unknown"):
    """Extracts styles, links, and body content from HTML string."""
    style_pattern = re.compile(r'<style[^>]*>(.*?)</style>', re.DOTALL | re.IGNORECASE)
    link_pattern = re.compile(r'<link[^>]*>', re.IGNORECASE)
    
    styles = style_pattern.findall(content)
    links = link_pattern.findall(content)
    
    # Body extraction
    body_pattern = re.compile(r'<body[^>]*>(.*?)</body>', re.DOTALL | re.IGNORECASE)
    body_match = body_pattern.search(content)
    
    if body_match:
        body = body_match.group(1)
        print(f"[{fname}] Found body tag. extracted {len(body)} chars.")
    else:
        # Fallback: Content after </head> or just content if no head.
        print(f"[{fname}] No body tag found. Using fallback.")
        head_end = content.find('</head>')
        if head_end != -1:
            body = content[head_end+7:]
        else:
            # Maybe just strip doctype/html
            body = content
            body = re.sub(r'<!DOCTYPE[^>]*>', '', body, flags=re.IGNORECASE)
            body = re.sub(r'<html[^>]*>', '', body, flags=re.IGNORECASE)
            body = re.sub(r'</html>', '', body, flags=re.IGNORECASE)
    
    return styles, links, body

def replace_links(html_content):
    """Replaces external links with local ones."""
    for pattern, replacement in LINK_MAP.items():
        html_content = re.sub(pattern, replacement, html_content, flags=re.IGNORECASE)
    
    # Basic cleanup for root relative links
    html_content = html_content.replace('href="/home-page"', 'href="index.html"')
    html_content = html_content.replace('href="/club"', 'href="club.html"')
    html_content = html_content.replace('href="/method"', 'href="method.html"')
    html_content = html_content.replace('href="/workouts"', 'href="workouts.html"')
    html_content = html_content.replace('href="/faq"', 'href="faq.html"')
    html_content = html_content.replace('href="/shop"', 'href="shop.html"')
    
    return html_content


def set_active_nav_link(html_content, page_name):
    """Sets the active class on the navigation link for the current page."""
    # First, remove active class from all nav links
    html_content = html_content.replace('class="nav-link active"', 'class="nav-link"')
    
    # Then add active class to the current page's link
    # We look for href="page_name" class="nav-link"
    target_str = f'href="{page_name}" class="nav-link"'
    replacement_str = f'href="{page_name}" class="nav-link active"'
    
    html_content = html_content.replace(target_str, replacement_str)
    
    return html_content

def build_site():
    print("Building site...")
    
    # Define paths
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    PARTIALS_DIR = os.path.join(BASE_DIR, 'partials')
    BLOCKS_DIR = os.path.join(BASE_DIR, 'blocks')
    PAGES_DIR = os.path.join(BASE_DIR, 'pages')

    # Ensure pages directory exists
    if not os.path.exists(PAGES_DIR):
        os.makedirs(PAGES_DIR)

    # Read Header and Footer
    with open(os.path.join(PARTIALS_DIR, 'Header.html'), 'r', encoding='utf-8') as f:
        header_raw = f.read()
    with open(os.path.join(PARTIALS_DIR, 'FOOTER.html'), 'r', encoding='utf-8') as f:
        footer_raw = f.read()
        
    h_styles, h_links, h_body = extract_content(header_raw, "Header.html")
    f_styles, f_links, f_body = extract_content(footer_raw, "FOOTER.html")
    
    h_body = replace_links(h_body)
    f_body = replace_links(f_body)
    
    all_shared_links = list(set(h_links + f_links))
    all_shared_styles = h_styles + f_styles
    
    for page_name, content_files in PAGES.items():
        print(f"Creating {page_name}...")
        
        page_styles = list(all_shared_styles)
        page_links = list(all_shared_links)
        
        # Set active nav link for this specific page
        page_header = set_active_nav_link(h_body, page_name)
        page_body_parts = [page_header]
        
        if not content_files:
            # Placeholders for empty pages
            if page_name in ['index.html', 'club.html', 'shop.html']:
                 page_body_parts.append('<div style="min-height: 50vh; display:flex; align-items:center; justify-content:center;"><h2>Contenido Próximamente</h2></div>')
        
        for fname in content_files:
            block_path = os.path.join(BLOCKS_DIR, fname)
            # Special handling for FAQ if I decided to renaming it or if it is missing
            if fname == 'FAQ.html' and not os.path.exists(block_path):
                 # Try finding it in root just in case, or assume we need to move it manually? 
                 # For now, let's assume it is in blocks. 
                 pass

            if not os.path.exists(block_path):
                print(f"  Warning: {fname} missing in blocks directory.")
                continue
            
            with open(block_path, 'r', encoding='utf-8') as f:
                c_raw = f.read()
            
            c_styles, c_links, c_body = extract_content(c_raw, fname)
            
            page_styles.extend(c_styles)
            for l in c_links:
                if l not in page_links:
                    page_links.append(l)
            
            c_body = replace_links(c_body)
            page_body_parts.append(f"\n<!-- SECTION: {fname} -->\n{c_body}\n")

            
        page_body_parts.append(f_body)
        
        final_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELES Pilates - {page_name.replace('.html', '').title()}</title>
    {''.join(page_links)}
    <style>
        {chr(10).join(page_styles)}
    </style>
</head>
<body>
    {''.join(page_body_parts)}
</body>
</html>"""
        
        with open(os.path.join(PAGES_DIR, page_name), 'w', encoding='utf-8') as f:
            f.write(final_html)
            
    print(f"Build complete. {len(PAGES)} pages generated in {PAGES_DIR}.")

if __name__ == "__main__":
    build_site()
