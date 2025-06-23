import os
from PIL import Image

# Caminho da pasta onde estão as imagens e vídeos
pasta = r'c:\Users\comer\OneDrive\Imagens\IMAGENS PARA O SITE'  # Altere se necessário

# Extensões de imagem e vídeo permitidas
extensoes_imagem = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
extensoes_video = ('.mp4', '.mov', '.avi', '.mkv', '.wmv', '.webm', '.m4v')

arquivos = os.listdir(pasta)

contador_img = 1
contador_vid = 1

for nome in sorted(arquivos):
    ext = os.path.splitext(nome)[1].lower()
    caminho_antigo = os.path.join(pasta, nome)
    if ext in extensoes_imagem:
        novo_nome = f'foto{contador_img}{ext}'
        contador_img += 1
    elif ext in extensoes_video:
        novo_nome = f'video{contador_vid}{ext}'
        contador_vid += 1
    else:
        continue  # ignora outros arquivos
    caminho_novo = os.path.join(pasta, novo_nome)
    os.rename(caminho_antigo, caminho_novo)
    print(f'{nome} -> {novo_nome}')

print('Renomeação concluída!')

for nome in os.listdir(pasta):
    if nome.lower().endswith('.webp'):
        caminho_antigo = os.path.join(pasta, nome)
        novo_nome = os.path.splitext(nome)[0] + '.jpeg'
        caminho_novo = os.path.join(pasta, novo_nome)
        try:
            with Image.open(caminho_antigo) as img:
                img = img.convert('RGB')
                img.save(caminho_novo, 'JPEG')
            os.remove(caminho_antigo)
            print(f'{nome} -> {novo_nome}')
        except Exception as e:
            print(f'Erro ao converter {nome}: {e}')

print('Conversão concluída!')