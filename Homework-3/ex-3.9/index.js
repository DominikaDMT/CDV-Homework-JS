const searchBtn = $('.search');

users = [];

const findUser = () => {
  const userName = $('input').val();
  const url = `https://api.github.com/users/${userName}`;
  $('input').val('');

  $.ajax({
    url,
    statusCode: {
      404: function () {
        $('.name strong').text('');
        $('.username strong').text('');
        $('.since strong').text('');
        $('.image').attr('src', '');
        $('.alert').text("That user doesn't exist");
      },
    },
  }).done((response) => {
    $('.name strong').text(response.name);
    $('.username strong').text(response.login);
    $('.since strong').text(response.created_at.substring(0, 10));
    $('.image').attr('src', response.avatar_url);
    $('.alert').text('');
    if (users.includes(userName)) return;
    users.push(userName);
    $('ul').append($(`<li>${userName}</li>`));
    $('li').click(function (e) {
      $('input').val(e.target.outerText);
      findUser();
    });
  });
};

searchBtn.click(findUser);