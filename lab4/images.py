import os
import json

def create_images_json(directory):
    files = os.listdir(directory)

    files = [f for f in files if os.path.isfile(os.path.join(directory, f))]

    images_dict = {"files": files}

    json_data = json.dumps(images_dict, indent=2)

    with open("images.json", "w") as json_file:
        json_file.write(json_data)

directory_path = "./images"

create_images_json(directory_path)

print("JSON fajl je uspešno kreiran.")
