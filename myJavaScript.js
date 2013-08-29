var users;
var tasks;
var usersArray=[];
var tasksArray=[];
$(document).ready(function()
{
    start();
});
function start() {
    $.ajax({ 
    type: "GET",
    url: "/tasks",
    dataType: 'json',
    success:function(res){
            tasks=res[0];
            users=res[1];
            /*createTable(tasks);*/
           }
           
           
        });
}
/*function createTable(tasks) {
    var tasksTable="<tr><th>Task Name</th><th>Task Order</th><th>Task Owner</th><th>Assigned To</th><th>Task Status</th><th>Show Task</th><th>Edit Task</th><th>Delete Task</th></tr>";
    for(var object in tasks){
        var obj=tasks[object];
        tasksTable+="<tr id="+obj.id+">"
        tasksTable+="<td>"+obj.name+"</td>";
        tasksTable+="<td>"+obj.order+"</td>";
        tasksTable+="<td>"+findOwnerById(obj.owner)+"</td>";
        tasksTable+="<td>"+findWorkerById(obj.assigned_to)+"</td>";
        tasksTable+="<td>"+findStatusById(obj.status)+"</td>";
        tasksTable+='<td><button class="tableButton showButton">Show Task</button></td>';
        tasksTable+='<td><button class="tableButton editButton">Edit Task</button></td>';
        tasksTable+='<td><button class="tableButton deleteButton">Delete Task</button></td></tr>';
        }
        $("#tasksTable").html(tasksTable);
    }
*/