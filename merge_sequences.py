import shutil
import os

src_dir = r"assets\5"
dest_dir = r"assets\4"

for i in range(1, 121):
    src_file = f"ezgif-frame-{i:03d}.jpg"
    dest_file = f"ezgif-frame-{i+120:03d}.jpg"
    
    src_path = os.path.join(src_dir, src_file)
    dest_path = os.path.join(dest_dir, dest_file)
    
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_file} to {dest_file}")
    else:
        print(f"Skipping {src_file} (not found)")
