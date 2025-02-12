const express = require('express');
const app = express();
app.use(express.json());

let menu = [
  { id: 1, name: "Pizza", price: 10.99 },
  { id: 2, name: "Burger", price: 5.99 }
];


app.put('/menu/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    let item = menu.find(m => m.id === itemId);
    
    if (!item) return res.status(404).send("Item not found.");
    
    Object.assign(item, updatedItem);
    res.json({ message: "Item updated successfully", item });
});

app.delete('/menu/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    menu = menu.filter(m => m.id !== itemId);
    res.json({ message: "Item deleted successfully" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
