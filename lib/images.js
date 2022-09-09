import fs from 'fs'

export function getAllGalleryFilenames() {
    const fileNames = fs.readdirSync('./public/gallery');

    return fileNames.map((fileName) => {
      return {
        params: {
          file: fileName,
        },
      };
    });
  }