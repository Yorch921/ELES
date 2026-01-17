
with open('blocks/FAQ.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if 'Preguntas Frecuentes' in line:
            print(f"Match at {i+1}: {line.strip()}")
            # print surrounding lines
            start = max(0, i - 20)
            end = min(len(lines), i + 20)
            for j in range(start, end):
                print(f"{j+1}: {lines[j].strip()}")
            break
