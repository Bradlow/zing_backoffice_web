<!DOCTYPE html>
<html>
<head>
  <title>List Maker</title>
  <style>
    ul {
      list-style-type: none;
    }

    .list-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .list-item input {
      margin-right: 10px;
    }

    .completed {
      text-decoration: line-through;
      opacity: 0.5;
    }
  </style>
  <script src="to-do-list-js.js"></script>
</head>
<body>
  <h1>List Maker</h1>
  <div>
    <input type="text" id="item-input" placeholder="Enter an item">
    <button onclick="addItem()">Add Item</button>
  </div>
  <ul id="list-container"></ul>
  <a href="index.html">Home</a>
</body>
</html>
