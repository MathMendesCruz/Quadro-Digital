import os

# Caminho da pasta onde estão as imagens e vídeos
pasta = r'C:\Users\comer\OneDrive\Imagens\IMAGENS PARA O SITE'  # Altere para o caminho correto

extensoes_imagem = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
extensoes_video = ('.mp4', '.mov', '.avi', '.mkv', '.wmv', '.webm', '.m4v')

arquivos = sorted(os.listdir(pasta))
slides = []

for nome in arquivos:
    ext = os.path.splitext(nome)[1].lower()
    if ext in extensoes_imagem:
        slides.append(f"    {{ type: 'image', src: '{nome}' }},")
    elif ext in extensoes_video:
        slides.append(f"    {{ type: 'video', src: '{nome}' }},")

print('const slides = [')
for slide in slides:
    print(slide)
print('];')