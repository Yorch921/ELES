
import os

def fix_faq():
    file_path = 'blocks/FAQ.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    print(f"Total lines: {len(lines)}")
    
    # Locate CSS block
    # Start: line 14865 (index 14864)
    # End: line 15457 (index 15456) -> just before <body> at 15458
    css_start = 14864
    css_end = 0
    for i in range(css_start, 15500):
        if '<body' in lines[i].lower():
            css_end = i
            break
            
    if css_end == 0:
        print("Error: Could not find end of CSS block (body tag).")
        return
        
    css_lines = lines[css_start:css_end]
    print(f"Extracted CSS lines: {len(css_lines)}")
    
    # Locate Content block
    # Start: <!-- START FAQ.html -->
    # End: <!-- END FAQ.html -->
    content_start = 0
    content_end = 0
    
    for i, line in enumerate(lines):
        if '<!-- START FAQ.html -->' in line:
            content_start = i
        if '<!-- END FAQ.html -->' in line:
            content_end = i + 1 # Include the end marker
            break # Stop at first end match
            
    if content_start == 0 or content_end == 0:
        print("Error: Could not find content markers.")
        return
        
    content_lines = lines[content_start:content_end]
    print(f"Extracted Content lines: {len(content_lines)}")
    
    # Construct new file content
    new_content = [
        "<!-- Extracted CSS for FAQ -->\n",
        "<style>\n"
    ]
    new_content.extend(css_lines)
    new_content.append("</style>\n\n")
    new_content.extend(content_lines)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_content)
        
    print(f"Successfully updated {file_path}")

if __name__ == "__main__":
    fix_faq()
