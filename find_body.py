
with open('blocks/FAQ.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if '<body' in line.lower():
            print(f"Found body at line {i+1}: {line.strip()}")
            # Print next few lines too to see content
            for j in range(1, 20):
                if i+j < len(lines):
                    print(f"  {i+1+j}: {lines[i+j].strip()}")
