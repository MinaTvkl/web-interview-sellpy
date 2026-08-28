import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3001

const todoLists = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: [{text: 'First todo of first list!', completed: false}],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [{text: 'First todo of second list!', completed: false}],
  },
}

app.get('/todo-lists', (req, res) => res.json(todoLists))

app.patch('/todo-lists/:id', (req, res) => {
  const listId = req.params.id
  const updatedTodos = req.body
  
  todoLists[listId].todos = updatedTodos
  res.json(todoLists[listId])
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
