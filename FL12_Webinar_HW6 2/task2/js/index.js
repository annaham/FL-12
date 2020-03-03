const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$( document ).ready(function() {
  function getStorageData() {
    const data = localStorage.getItem('list')
    return data ? JSON.parse(data) : [];
  }

  function setStorageData(data) {
    localStorage.setItem('list', JSON.stringify(data));
  }

  function getTask(data) {
    const $li = $("<li>").addClass("item");
    const $span = $('<span>').addClass('data-${').text(data);
    const $button = $('<button>')
      .addClass('item-remove')
      .text('Remove')
      .click(function () {
        removeItem($(this).parent().children().first().text());
      })

    $($li).append($span, $button);

    return $li;
  }

  function getList() {
    const $list = $('.list');

    $list.empty();

    const list = getStorageData();

    if (!!list && !!list.length) {
      list.forEach(el => {
        $list.append(getTask(el.value));
      })
    }
  }

  function saveItem(value) {
    const target = { value, done: false };
    const oldValues = getStorageData();
    const updatedList = [...oldValues, target];
    setStorageData(updatedList)
  }

  function removeItem(value) {
    const list = getStorageData();
    const target = list.find(el => el.value == value);
    
    list.splice(list.indexOf(target), 1);
    setStorageData(list);
    getList();
  }

  function searchTask(value) {
    const list = getStorageData();
    return list.find(el => el.value == value);
  }

  $add.click(function(event) {
    event.preventDefault();
    const value = $input.val();
    $('.list').append(getTask(value));
    saveItem(value);
    $input.val('');
  });

  getList()
});
