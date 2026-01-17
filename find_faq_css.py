
with open('blocks/FAQ.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if '.faq-hero' in line:
            print(f"Found .faq-hero at {i+1}: {line.strip()}")
            # Print a few lines of context
            for j in range(max(0, i-5), min(len(lines), i+10)):
                print(f"{j+1}: {lines[j].strip()}")
            break
