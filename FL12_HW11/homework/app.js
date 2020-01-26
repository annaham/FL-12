const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];



const rootNode = document.getElementById('root');

function treeFolder(tree ,struct){
struct = document.createElement('ul');
rootNode.appendChild(struct);
for(let node of tree){
const innerStruct = document.createElement('li');
struct.appendChild(innerStruct);
const divka = document.createElement('div');
innerStruct.appendChild(divka);
const image = document.createElement('i');
image.classList.add('material-icons');
divka.appendChild(image);
const name = document.createElement('span');
divka.appendChild(name);

name.innerHTML = node.title;
if(node.folder){
  innerStruct.classList.toggle('folder');
      image.innerHTML = 'folder';
      innerStruct.addEventListener('click', function() {
        if (image.innerHTML === 'folder') {
          image.innerHTML = 'folder_open';
        } else {
          image.innerHTML = 'folder';
        }
        innerStruct.querySelector('.closed').classList.toggle('open');
      });
      if (node.children) {
        treeFolder(node.children, innerStruct);
      } else {
        let emptyFolder = document.createElement('div');
        emptyFolder.classList.add('empty_folder', 'closed');
        emptyFolder.innerHTML = 'Folder is empty';
        innerStruct.appendChild(emptyFolder);
      }
    } else {
        innerStruct.classList.toggle('file');
        image.innerHTML = 'insert_drive_file';
    }
  }
  if (parent.parentNode !== rootNode) {
    parent.classList.toggle('closed');
  }
}

treeFolder(structure, rootNode);



