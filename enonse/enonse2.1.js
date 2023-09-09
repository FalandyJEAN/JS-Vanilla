const readlineSync=require("readline-sync")

let todoList = []

function addTask(deskripsyon) {
  todoList.push(deskripsyon)
}

function displayTasks() {
    if (todoList.length === 0) {
      console.log("Pa gen okenn tach ki gentan kreye.")
    } else {
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}- ${todoList[i]}`)
      }
    }
  }

function markTaskDone(pozisyonTachLan) {
  if (pozisyonTachLan >= 0 && pozisyonTachLan < todoList.length) {
    console.log(`Tach "${todoList[pozisyonTachLan]}" fini kounya.`)
    todoList.splice(pozisyonTachLan, 1)
  }else if(todoList.length===0){
    console.log("Pa gen okenn tach ki gentan kreye.")
  } else {
    console.log("Pozisyon ou antre an pa kòrèk.")
  }
}

let choice
do {
  choice = readlineSync.question(`*********Meni*********
  1. Ajoute tach
  2. Afiche tach yo
  3. Fini yon tach
  4. Femen
  
  Chwa ou a: `)

  switch (choice) {
    case "1":
      let deskripsyonTachLan = readlineSync.question("Antre deskripsyon tach la:")
      addTask(deskripsyonTachLan);
      break
    case "2":
      displayTasks()
      break
    case "3":
      let taskPozisyon = parseInt(readlineSync.question("Antre pozisyon tach wap femen an :")) - 1
      markTaskDone(taskPozisyon)
      break
    case "4":
      console.log("Pwogram lan femen kounye a.")
      break
    default:
      console.log("Opsyon sa pa kòrèk. Tanpri, chwazi yon opsyon ki nan lis la")
  }
} while (choice !== "4")
