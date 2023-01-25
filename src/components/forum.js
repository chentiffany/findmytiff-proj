import React, {useState} from 'react';
import {database} from '../firebase';
import {ref,onValue} from "firebase/database";


// const db = database();

export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }
    componentDidMount(){
        const dbRef = ref (database);

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                console.log(records);
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records});
            // console.log (tableData);
        });
    }
    render () {
        const renderList = this.state.tableData.map((row, index) => 
                             <div key={index}> <b><i>{row.data.firstName}:</i></b> {row.data.email}</div>
                           );
        return (
            <div>
                {renderList}
            </div>
        )
        
    }
}