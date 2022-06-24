class Employee {
    constructor(emp){
        this.name = emp.name
        this.age = emp.age
        this.position = emp.position
    }
}

const list = [
    new Employee({
        name: 'Lisa',
        age: 20,
        position: 'manager'
    }),
    new Employee({
        name: 'Anna',
        age: 25,
        position: 'manager'
    }),
    new Employee({
        name: 'Alex',
        age: 23,
        position: 'manager'
    })
]

class EmpTable {
    constructor(List){
        this.List = List
    }
    getHtml (){
        let html = ''
        this.List.forEach(el => {
            html += `
            <tr style="font-size:25px">
                <td style="padding: 0 15px">${el.name}</td>
                <td style="padding: 0 15px">${el.age}</td>
                <td style="padding: 0 15px">${el.position}</td>
            </tr>
            `
        });
        return html
    }
    output(){
        document.getElementById('output').innerHTML = this.getHtml()
    }
}

const newList = new EmpTable(list)
newList.output()

