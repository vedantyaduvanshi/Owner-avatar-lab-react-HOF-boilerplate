import React from "react";
export default class HigherOrderComponents extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1 ', name: 'Joe ', user_type: 'Developer', age:31, years:11 },
                { id: '2 ', name: 'Hill ', user_type: 'Designer', age:26, years:4 },
                { id: '3 ', name: 'John ', user_type: 'Teacher', age:24, years: 2},
                { id: '4 ', name: 'Sam ', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5 ', name: 'Jack ', user_type: 'Designer', age:43, years: 18}
            ],
            filterUsingUserType:[],
            filterUsingFirstLetter:[],
            filterUsingAge:[],
            totalYears : 0
        }
        let filteredData = this.state.userData.filter((el,i,arr)=>el.user_type === "Designer")
        this.state.filterUsingUserType = filteredData;
        let ChangeName = this.state.userData.filter((el,i,arr)=>el.name.startsWith("J"))
        this.state.filterUsingFirstLetter = ChangeName;
        let ChangeAge = this.state.userData.filter((el,i,arr)=>el.age > 28 && el.age <=50)
        this.state.filterUsingAge = ChangeAge;
        let total = this.state.userData.filter((el)=>el.user_type == "Designer").reduce((acc,el,i,arr)=>{
            return acc+el.years;
        },0)
        this.state.totalYears = total
    }
    render(){
        let stylediv = {
            marginLeft: "23vw",
            width:"40vw",
            border: "2px solid black",
            textAlign: "center",
            color: "Blue",
            background:"white",
        }
        let h1style = {
            color: "white"
        }
        return(
        <>
        <h1  style = {h1style}>Display All the items</h1>
        <div style ={stylediv}> 
        {this.state.userData.map((el,i,arr)=>(
            <div key ={el.id}>
               Id : {el.id} 
               Name : {el.name}
               UserType : {el.user_type}
            </div>  
        ))}
        </div>
        <h1 style = {h1style}>Display based on User type</h1>
        <div style ={stylediv}>
        {this.state.filterUsingUserType.map((el,i,arr)=>(
            <div key ={el.id}>
              Id : {el.id} 
               Name : {el.name}
               UserType : {el.user_type}
            </div>  
        ))}
        </div>
        <h1  style = {h1style}>Filter all data starting with J</h1>
        <div style ={stylediv}>
        {this.state.filterUsingFirstLetter.map((el,i,arr)=>(
            <div key ={el.id}>
              Id : {el.id} 
               Name : {el.name}
               UserType : {el.user_type}
            </div>  
        ))}
        </div>
        <h1  style = {h1style}>Filter all data based on age greater than 28 and less than equal to 50</h1>
        <div style ={stylediv}>
        {this.state.filterUsingAge.map((el,i,arr)=>(
            <div key ={el.id}>
              Id : {el.id} 
               Name : {el.name}
               UserType : {el.user_type}
            </div>  
        ))}
        </div>
        <h1  style = {h1style}>Find the total years of the designers</h1>
        <div style ={stylediv}>
        <p>{this.state.totalYears}</p>
        </div>
        </>
        )
    }
}