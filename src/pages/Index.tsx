import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {

  const poems = [
    {
      title: "Не жалею, не зову, не плачу...",
      text: "Не жалею, не зову, не плачу,\nВсё пройдёт, как с белых яблонь дым.\nУвяданья золотом охваченный,\nЯ не буду больше молодым.",
      year: "1921"
    },
    {
      title: "Письмо к женщине",
      text: "Вы помните,\nВы всё, конечно, помните,\nКак я стоял,\nПриблизившись к стене,\nВзволнованно ходили вы по комнате\nИ что-то резкое\nВ лицо бросали мне.",
      year: "1924"
    },
    {
      title: "Отговорила роща золотая",
      text: "Отговорила роща золотая\nБерёзовым, весёлым языком,\nИ журавли, печально пролетая,\nУж не жалеют больше ни о ком.",
      year: "1924"
    }
  ];

  const photos = [
    "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/5cc1e910-72d1-4997-88d1-e4ba528aa062.jpg",
    "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/5cc1e910-72d1-4997-88d1-e4ba528aa062.jpg",
    "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/5cc1e910-72d1-4997-88d1-e4ba528aa062.jpg",
    "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/5cc1e910-72d1-4997-88d1-e4ba528aa062.jpg"
  ];

  const friends = [
    { name: "Александр Блок", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" },
    { name: "Николай Клюев", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" },
    { name: "Владимир Маяковский", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" },
    { name: "Андрей Белый", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" },
    { name: "Борис Пастернак", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" },
    { name: "Анна Ахматова", avatar: "https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/fbc0f877-01b9-49c2-b241-a3d972c02216.jpg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="MessageCircle" size={28} className="text-primary-foreground" />
            <span className="text-xl font-medium">ВКонтакте</span>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="Search" size={20} className="text-primary-foreground/80 cursor-pointer hover:text-primary-foreground" />
            <Icon name="Bell" size={20} className="text-primary-foreground/80 cursor-pointer hover:text-primary-foreground" />
            <Icon name="Menu" size={20} className="text-primary-foreground/80 cursor-pointer hover:text-primary-foreground" />
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-3">
            <Card className="overflow-hidden mb-4">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="pt-0 pb-4 px-6">
                <div className="flex flex-col md:flex-row gap-6 -mt-16">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage src="https://cdn.poehali.dev/projects/d1d29e24-49d7-468c-92dc-46031f3c941d/files/5cc1e910-72d1-4997-88d1-e4ba528aa062.jpg" alt="Сергей Есенин" />
                    <AvatarFallback>СЕ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 mt-16 md:mt-4">
                    <h1 className="text-2xl font-bold text-foreground">Сергей Есенин</h1>
                    <p className="text-muted-foreground text-sm">Последний поэт деревни</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Icon name="UserPlus" size={16} className="mr-2" />
                        Подписаться
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Написать
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-6 mt-4 md:mt-16">
                    <div className="text-center">
                      <div className="text-xl font-semibold text-foreground">248</div>
                      <div className="text-xs text-muted-foreground">друзей</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-foreground">1.2М</div>
                      <div className="text-xs text-muted-foreground">подписчиков</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <Card className="mb-4">
                <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0">
                  <TabsTrigger 
                    value="profile" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Профиль
                  </TabsTrigger>
                  <TabsTrigger 
                    value="biography"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Биография
                  </TabsTrigger>
                  <TabsTrigger 
                    value="works"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Творчество
                  </TabsTrigger>
                  <TabsTrigger 
                    value="photos"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Фотографии
                  </TabsTrigger>
                  <TabsTrigger 
                    value="poems"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Стихи
                  </TabsTrigger>
                </TabsList>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-4">
                  <TabsContent value="profile" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Основная информация</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Icon name="Calendar" size={20} className="text-muted-foreground mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">День рождения</div>
                              <div className="text-sm">3 октября 1895</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Icon name="MapPin" size={20} className="text-muted-foreground mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">Место рождения</div>
                              <div className="text-sm">с. Константиново, Рязанская губерния</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Icon name="Briefcase" size={20} className="text-muted-foreground mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">Деятельность</div>
                              <div className="text-sm">Поэт, представитель новокрестьянской поэзии</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="biography" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Биография</h3>
                        <div className="space-y-4 text-sm leading-relaxed">
                          <p>
                            Сергей Александрович Есенин родился 3 октября 1895 года в селе Константиново 
                            Рязанской губернии в крестьянской семье. С раннего детства воспитывался в доме 
                            деда по материнской линии.
                          </p>
                          <p>
                            В 1912 году переехал в Москву, работал в типографии, посещал лекции в народном 
                            университете Шанявского. В 1915 году приехал в Петроград, где познакомился с 
                            Блоком, Клюевым и другими поэтами.
                          </p>
                          <p>
                            Первый сборник стихов «Радуница» вышел в 1916 году. В его творчестве отразились 
                            природа русской деревни, крестьянская Русь, революционные события. Есенин является 
                            одним из самых читаемых русских поэтов XX века.
                          </p>
                          <p>
                            Погиб при невыясненных обстоятельствах 28 декабря 1925 года в Ленинграде 
                            в гостинице «Англетер».
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="works" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Творческий путь</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium mb-2">Ранний период (1910-1915)</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Первые стихи написаны в стиле частушек. Основные темы — природа, любовь к родине, 
                              образы русской деревни.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Зрелое творчество (1916-1923)</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Сборники «Радуница», «Преображение», «Сельский часослов». Развитие имажинизма, 
                              философские размышления о судьбе России.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Поздний период (1924-1925)</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              «Персидские мотивы», поэма «Анна Снегина». Вершина лирического мастерства, 
                              трагические мотивы, тема прощания с жизнью.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="photos" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Фотографии</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {photos.map((photo, index) => (
                            <div 
                              key={index} 
                              className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                            >
                              <img 
                                src={photo} 
                                alt={`Фото ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="poems" className="mt-0 space-y-4">
                    {poems.map((poem, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold">{poem.title}</h3>
                            <span className="text-sm text-muted-foreground">{poem.year}</span>
                          </div>
                          <p className="text-sm leading-relaxed whitespace-pre-line text-foreground/90">
                            {poem.text}
                          </p>
                          <div className="flex items-center gap-6 mt-4 pt-4 border-t">
                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <Icon name="Heart" size={18} />
                              <span>Нравится</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <Icon name="MessageCircle" size={18} />
                              <span>Комментировать</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <Icon name="Share2" size={18} />
                              <span>Поделиться</span>
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <Icon name="Users" size={18} />
                        Друзья
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {friends.map((friend, i) => (
                          <div key={i} className="aspect-square bg-muted rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                            <img 
                              src={friend.avatar} 
                              alt={friend.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <button className="text-sm text-primary hover:underline mt-3 w-full text-left">
                        Показать всех
                      </button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <Icon name="Music" size={18} />
                        Интересы
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="text-muted-foreground">Поэзия, природа, деревенская жизнь, философия</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <Icon name="BookOpen" size={18} />
                        Любимые книги
                      </h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Произведения А. Пушкина</div>
                        <div>Стихи М. Лермонтова</div>
                        <div>Поэзия Н. Некрасова</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;