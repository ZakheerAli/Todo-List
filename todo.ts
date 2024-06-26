#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.bgBlue.underline.grey("WELCOME TO TODO LIST CREATED BY ZAKHEER ALI"));

let todo_list:string[]=[];

let while_condition:boolean=true;
// ==================================OPTIONS======================================================
while(while_condition===true){
    let option=await inquirer.prompt([
        {
            type:"list",
            name:"useroption",
            message:chalk.bgWhite.bold.black("\nSelect an option"),
            choices:["Add","Remove"]
        }
    ])
    //=============================ADD==========================================================
    if(option.useroption==="Add"){
        let add=await inquirer.prompt([
            {
                type:"input",
                name:"useradd",
                message:chalk.bold.bgWhite.black("\nWrite something to add in the task list: ")

            }
        ])
        if (add.useradd !== ""){
            todo_list.push(add.useradd);
            console.log(todo_list);
         }else{
            console.log(chalk.bold.bgWhite.black("\nPlease write something to add in the task list"));
         }
    }
//=================================REMOVE=====================================================
    if(option.useroption==="Remove"){
     let removeChoice=await inquirer.prompt([
        {
            type:"list",
            name:"removeuser",
            message:"Select item to remove",
            choices:todo_list
        }
     ]);
     let index_to_remove=todo_list.indexOf(removeChoice.removeuser);
     if (index_to_remove >= 0){
        todo_list.splice(index_to_remove,1);
        console.log(chalk.bold.bgWhite.black(`\nYou have removed ${removeChoice.removeuser}:`))
        console.log(todo_list);
     }
    }
    //==============================CONFIRMATION===========================================
    let userans=await inquirer.prompt([
        {
            type:"confirm",
            name:"userchoice",
            message:chalk.bold.bgWhite.black("\nDo you want to continue?"),
            default:true,
        }
    ])
    if(userans.userchoice===false){
        while_condition=false;
    }
}
console.log(chalk.bold.bgYellowBright.underline.black("\n\tTHANK YOU FOR USING MY TODO LIST"));

