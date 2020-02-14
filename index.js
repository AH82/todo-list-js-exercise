// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() { 
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  } 
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];

task2.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task2.logState(); // Clean Cat Litter has been completed

// console.log(tasks);