const parentList = [
  {
    name: "Marcos Maia",
    children: "Clarice",
  },
  {
    name: "João Paulo",
    children: "Pedro",
  },
  {
    name: "Fernanda",
    children: "Rosa",
  },
  {
    name: "Patricia",
    children: "Ana",
  },
  {
    name: "Lucas",
    children: "Samira",
  },

]

function getParent(children){
  for(x in parentList){
    if (parentList[x].children == children)
    return (parentList[x].name);
  }
}

console.log (getParent ('Ana'))

//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro 
