function newService() {
  const self = {};

  self.getNewsList = function () {
    return [
      {
        block: "Новости",
        picture:
          'https://itc.ua/wp-content/uploads/2021/03/wandavision.0-450x300.jpg"',
        title:
          'Количество подписчиков Disney+ перевалило за 100 миллионов меньше чем через полтора года после запуска онлайн-кинотеатра',
        autor: 'Владимер Скрипин',
        descr:
          'Онлайн-кинотеатр Disney+ преодолел знаменательный рубеж в 100 миллионов подписчиков — об этом важном достижении объявил глава Disney Боб Чапек на ежегодном собрании инвесторов. Чтобы достичь…',
          type: 'news'
      },
    
    ];
  };

  return self;
}
