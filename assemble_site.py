
import os
import re

# Files in order
files = [
    'Header.html', 
    'METHOD parte 1.html', 
    'METHOD parte 2.html', 
    'METHOD parte 3.html', 
    # 'METHOD parte 4.html', # Missing
    'WORKOUTS parte 1.html', 
    'WORKOUTS parte 2.html', 
    'WORKOUTS parte 3.html', 
    'FAQ.html', 
    'FOOTER.html'
]

css_content = []
body_content = []
head_links = []
scripts = []

# Regex patterns
style_pattern = re.compile(r'<style[^>]*>(.*?)</style>', re.DOTALL | re.IGNORECASE)
body_pattern = re.compile(r'<body[^>]*>(.*?)</body>', re.DOTALL | re.IGNORECASE)
link_pattern = re.compile(r'<link[^>]*>', re.IGNORECASE)
script_pattern = re.compile(r'<script[^>]*>.*?</script>', re.DOTALL | re.IGNORECASE)
head_pattern = re.compile(r'<head[^>]*>(.*?)</head>', re.DOTALL | re.IGNORECASE)

print("Starting assembly...")

for fname in files:
    if not os.path.exists(fname):
        print(f"Warning: {fname} not found. Skipping.")
        continue
    
    print(f"Processing {fname}...")
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Extract Head content for links/scripts
        head_match = head_pattern.search(content)
        if head_match:
            head_inner = head_match.group(1)
            links = link_pattern.findall(head_inner)
            for link in links:
                if link.strip() not in head_links:
                    head_links.append(link.strip())
            
            # Avoid collecting scripts that call main.jsx if we are making a static page?
            # Actually, standard scripts (like font awesome js) might be needed.
            # But usually font awesome is a link.
            # Let's collect scripts just in case, but filter out main.jsx later if needed.
            # actually we don't want to duplicate scripts if they are libraries.
            pass

        # Extract Styles
        styles = style_pattern.findall(content)
        for s in styles:
            css_content.append(s.strip())
            
        # Extract Body
        body_match = body_pattern.search(content)
        if body_match:
            body_inner = body_match.group(1)
            # We assume we just concat them.
            # Add a comment to mark sections
            body_content.append(f"\n<!-- SECTION: {fname} -->\n")
            body_content.append(body_inner.strip())

# Construct final HTML
final_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELES - Pilates Premium</title>
    
    <!-- Collected Links -->
    {chr(10).join(head_links)}
    
    <style>
        /* Global Reset & Variables */
        :root {{
            --burgundy-red: #70000e;
            --white: #ffffff;
            --white-soft: rgba(255, 255, 255, 0.9);
            --transition-smooth: all 0.3s ease;
            --font-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }}
        
        /* Merged Styles */
        {chr(10).join(css_content)}
    </style>
</head>
<body>

    {chr(10).join(body_content)}

</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("index.html has been overwritten with the assembled content.")
