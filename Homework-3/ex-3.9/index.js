const searchBtn = $('.search');

const findUser = () => {
  const userName = $('input').val();
  const url = `https://api.github.com/users/${userName}`;

  $.ajax(url).done((response) => {
    if (response.login) {
      $('.name strong').text(response.name);
      $('.username strong').text(response.login);
      $('.since strong').text(response.created_at.substring(0, 10));
      $('.image').attr('src', response.avatar_url);
      $('.alert').text('');

      $('ul').append($(`<li>${userName}</li>`));
    } else {
      $('.name strong').text('');
      $('.username strong').text('');
      $('.since strong').text('');
      $('.image').attr('src', '');
      $('.alert').text("That user doesn't exist");
    }
  });
};

searchBtn.click(findUser);