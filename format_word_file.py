formatted_file = open("formatted_words", 'w')

with open("words.txt", 'r') as file:
    for line in file:
        line = line.rstrip()
        l = '"' + line + '",' + '\n'
        formatted_file.writelines(l)

formatted_file.close()
