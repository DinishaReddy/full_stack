function handleAdd() {
    const title = document.getElementById('exampleFormControlInput1').value;
    const desp = document.getElementById('exampleFormControlTextarea1').value;

    if (!title || !desp) {
        alert('Please fill in all fields');
        return;
    }

    const tablebody = document.getElementById('datatable').getElementsByTagName('tbody')[0];
    const newrow = tablebody.insertRow();
    const sno = newrow.insertCell(0);
    const addTitle = newrow.insertCell(1);
    const addDesp = newrow.insertCell(2);
    const btnn = newrow.insertCell(3);    

    sno.innerHTML = newrow.rowIndex;
    addTitle.innerHTML = title;
    addDesp.innerHTML = desp;

    // Clear the input fields after adding the data to the table
    document.getElementById('exampleFormControlInput1').value = '';
    document.getElementById('exampleFormControlTextarea1').value = '';

    const removebutton = document.createElement('button');
    removebutton.innerText='Remove'
    removebutton.addEventListener('click', function() {
         tablebody.deleteRow(newrow.rowIndex);
        });

   btnn.appendChild(removebutton);
    }
const addbutton = document.getElementById('addButton');
addbutton.addEventListener('click', handleAdd);
