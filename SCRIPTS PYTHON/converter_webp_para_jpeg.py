import os
from PIL import Image

# Caminho da pasta onde estão as imagens
pasta = r'c:\Users\comer\OneDrive\Imagens\IMAGENS PARA O SITE'  # Altere se necessário

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
