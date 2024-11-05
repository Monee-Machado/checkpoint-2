// console.log('work!!')
// NOTE huh?

//#region State

let trash = 0


let clickTools = [
  {
    name: 'Shuttle',
    price: 1,
    quantity: 0,
    bonus: 5
  },

  {
    name: 'Compactor',
    price: 2,
    quantity: 0,
    bonus: 15
  }

];

let automaticAlliances = [
  {
    name: 'Junkmen',
    price: 3,
    quantity: 0,
    bonus: 20
  },

  {
    name: 'Factory',
    price: 4,
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



// NOTE trash exists
function mineTrash() {
  trash++
  // console.log('trash', trash)
  // TODO get all of my clickTools
  // TODO apply bonus * quantity to trash
  // TODO reference calculateCartTotal or calculate sootheAmount

  drawTrash()
}

function calculateClickBonus() {
  let total = 0
  for (let i = 0; i < clickTools.length; i++) {
    let clicktool = clickTools[i]
    total += clicktool[0].price * clicktool[0].quantity
    return
  }
  console.log('how hwohwohwohwidwhflkjwhdi;uhw;hvi;erwugfiu;gfvi;hbr')

}
// TODO write a new function that will grab all of my automaticTools and apply their bonus * quantity to trash
// TODO call this function every 3 seconds with an interval
function applyAuto() {

}



function drawTrash() {
  // NOTE see scoreboard for ref
  const trashElem = document.getElementById('trash-collected')
  trashElem.innerText = trash.toString()
}


// NOTE there's already a let function for the arrays above, so line above isn't needed!
function buyShuttle() {
  const shuttle = clickTools[0]
  // FIXME increase qty AFTER check to see if we can afford

  if (trash < shuttle.price) {
    window.alert(`Please collect more trash to utilize the Shuttle!`)
    return
  }

  shuttle.quantity += 1

  // FIXME always look at the price of the upgrade when taking currency away
  trash -= 100
  // TODO increase the price of the upgrade after purchasing (to start, increase price by 1)

  console.log('shuttle', shuttle);

  drawTrash()
  drawShuttle()
}

function drawShuttle() {
  const shuttle = clickTools[0]
  const shuttleElem = document.getElementById('shuttle-bought')
  console.log(shuttleElem);

  shuttleElem.innerText = shuttle.quantity.toString()

  // TODO add an id to the price element in your HTML
  // TODO grab that element with getElementById
  // TODO change the priceElem's innerText to the upgrade object's price
  // NOTE this section was DIFFICULT!!!! use the period notation to tap into the array by section!!!!3

}

function buyCompactor() {
  const compactor = clickTools[1]
  // FIXME increase qty AFTER check to see if we can afford

  console.log('compactor', compactor);

  if (trash < compactor.price) {
    window.alert(`Please collect more trash to utilize the Compactor!`)
    return
  }

  compactor.quantity += 1

  trash -= 100

  drawCompactor()
}

function drawCompactor() {
  const compactor = clickTools[1]
  const compactorElem = document.getElementById('compactor-bought')
  compactorElem.innerText = compactor.quantity.toString()

}

function buyJunkmen() {
  const junkmen = automaticAlliances[0]
  // FIXME increase qty AFTER check to see if we can afford



  junkmen.quantity += 1
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
  // FIXME increase qty AFTER check to see if we can afford



  factory.quantity += 1
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
// function drawToolStats() {
//   for (let i = 0; i < clickTools.length; i++) {
//     const tools = clickTools[i];
//     const toolsElem = document.getElementById(tools.name)
//     const spanElem = toolsElem.querySelector('span')
//     spanElem.innerText = tools.quantity.toString()
//   }
// }

function calculateTools() {

}

function calculateAuto() {

}

// TODO write a function for each upgrade array that will calculate each upgrades bonus * quantity and add to variable that is declared within that function (autoBonus, clickBonus), look at calculateCartTotal and calculateSootheAmounts
// TODO draw these variables to the page (you will need some elements with ids)






// function drawAllianceStats()


//#endregion


//#region 🕕 document load

// NOTE THIS is for accumulated time between timed items (alliances)
setInterval(applyAuto, 3000)

setInterval(applyAuto, 5000)
//#endregion