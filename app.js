// console.log('work!!')
// NOTE huh?

//#region State

let clickTools = [
  {
    name: 'Shuttle',
    price: 100,
    quantity: 0,
    bonus: 5
  },

  {
    name: 'Compactor',
    price: 250,
    quantity: 0,
    bonus: 15
  }

];

let automaticAlliances = [
  {
    name: 'Junkmen',
    price: 600,
    quantity: 0,
    bonus: 20
  },

  {
    name: 'Factory',
    price: 34000,
    quantity: 0,
    bonus: 200
  }
];

//#endregion





//#region 🧠 Logic

// function purchaseTools(toolName) {
//   const foundTool = clickTools.find(tool => tool.name == toolName)

//   // NOTE SUCCESS!!!!!! All you needed to do was fill out the onclick ('') section!!!
//   // NOTE ACTUALLY--- sike, because the foundtool function doesn't appear to be defined for some odd reason
//   if (trash < foundTool.price) {
//     window.alert(`Please collect more trash to utilize the ${foundTool.name}!`)
//     return
//   }

//   trash += foundTool.price
//   foundTool.quantity++


//   drawTrash()
//   drawToolStats()

//   console.log('get tool')
// }



let trash = 0
// NOTE trash exists
function mineTrash() {
  trash++
  // console.log('trash', trash)

  drawTrash()
}

function drawTrash() {
  // NOTE see scoreboard for ref
  const trashElem = document.getElementById('trash-collected')
  trashElem.innerText = trash.toString()
}


let shuttle = 0
// NOTE there's already a let function for the arrays above, so line above isn't needed!
function buyShuttle() {
  const shuttle = clickTools[0]
  // shuttle.quantity += 1

  if (trash < shuttle.price) {
    window.alert(`Please collect more trash to utilize the Shuttle!`)
    return
  }
  if (trash > shuttle.price) {
    trash -= 100
  }

  console.log('shuttle', shuttle);

  drawTrash()
  drawShuttle()
}

function drawShuttle() {
  const shuttle = clickTools[0]
  const shuttleElem = document.getElementById('shuttle-bought')
  shuttleElem.innerText = shuttle.quantity.toString()
  // NOTE this section was DIFFICULT!!!! use the period notation to tap into the array by section!!!!3

}

function buyCompactor() {
  const compactor = clickTools[1]
  compactor.quantity += 1

  console.log('compactor', compactor);

  if (trash < compactor.price) {
    window.alert(`Please collect more trash to utilize the Compactor!`)
    return
  }
  if (trash > compactor.price) {
    trash -= 100
  }

  drawCompactor()
}

function drawCompactor() {
  const compactor = clickTools[1]
  const compactorElem = document.getElementById('compactor-bought')
  compactorElem.innerText = compactor.quantity.toString()

}

function buyJunkmen() {
  const junkmen = automaticAlliances[0]
  junkmen.quantity += 1

  console.log('junkmen', junkmen);

  drawJunkmen()
}

function drawJunkmen() {
  const junkmen = automaticAlliances[0]
  const junkmenElem = document.getElementById('junkmen-bought')
  junkmenElem.innerText = junkmen.quantity.toString()

  drawTrash()
}

// function junkTimer() {
//   for (let i = 0; i automaticAlliances.length; i++) {
//     const junkmen = automaticAlliances[i]
//     junkmen.bonus += mineTrash
//   }
// }

// setInterval(junkTimer, 3000)

function buyFactory() {
  const factory = automaticAlliances[1]
  factory.quantity += 1

  console.log('factory', factory);

  drawFactory()
}

function drawFactory() {
  const factory = automaticAlliances[1]
  const factoryElem = document.getElementById('factory-bought')
  factoryElem.innerText = factory.quantity.toString()



}

//#endregion


//#region 🎨 Graphics

// NOTE THIS function (was) originally for displaying the tool's stats AFTER purchasing the item, I don't really know where to go from here
function drawToolStats() {
  for (let i = 0; i < clickTools.length; i++) {
    const tools = clickTools[i];
    const toolsElem = document.getElementById(tools.name)
    const spanElem = toolsElem.querySelector('span')
    spanElem.innerText = tools.quantity.toString()
  }
}






// function drawAllianceStats()


//#endregion


//#region 🕕 document load

// NOTE THIS is for accumulated time between timed items (alliances)
//#endregion