export const saveAppData=(app)=>{
    const existingList=JSON.parse(localStorage.getItem('installed'))
 let updateList=[]
 if(existingList){
    const isDuplicate=existingList.some(el=>el.id===app.id)
    if(isDuplicate){
        return alert("sorry ")
    }
    updateList=[...existingList,app]
 }else{
 updateList.push(app)
  
 }
 localStorage.setItem('installed',JSON.stringify(updateList))
 alert('installed')
}