
import Button from "../components/button"
import CardEmpty from "../components/cardEmpty"
import Select from "../components/select"
import StarsInput from "../components/starsInput"
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "../components/tab"
import Link from "../components/link"

export default function MangaPage(props) {

    const info = [
        {
            name: "Тип",
            value: "Манга"
        },
        {
            name: "Статус",
            value: "Выходит"
        },
        {
            name: "Перевод",
            value: "Выходит"
        },
        {
            name: "Год выпуска",
            value: "2017"
        },
        {
            name: "Автор",
            value: "Ken Wakui"
        },
        {
            name: "Художник",
            value: "Ken Wakui"
        },
        {
            name: "Издательство",
            value: "Bilibili Comics | Seven Seas Entertainment | Kodansha"
        },
    ]
    const genres = [
    'Боевик',
    'Драма',
    'Романтика',
    'Сёнэн',
    'Сёнэн',
    'Школа',
    'Мафия',
    'Преступники / Криминал',
    'Путешествие во времени',
    'Борьба за власть',
    'Будущее',
    'ГГ мужчина',
    'Дружба',
    'Жестокий мир',
    'Насилие / жестокость',
    'Спасение мира',]

    return (
        <main className="container mx-auto sm:pt-10">
            <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-6">
                {/* Карточка слева */}
                <div className="text-center">
                    <CardEmpty />
                    <StarsInput />
                    <Button className="w-full" variant="contain">
                        Читать
                    </Button>
                    <Select className="w-full my-3">
                        <option value="" selected>Не читалось</option>
                        <option value="">Прочитано</option>
                    </Select>

                </div>
                <div className=" sm:col-span-2 lg:col-span-5 mx-4 ">
                    {/* Названия */}
                    <p className=" break-words text-center text-xl xl:text-3xl sm:text-start"> История покорения знаменитого горячего источника в другом мире: Реинкарнация сорокалетнего любителя горячих источников в умиротворяющем курортном раю</p>
                    <div className="mt-3">
                        <p className=" text-xs text-th-primary-dark">Meitou Isekai no Yu Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita</p>
                        <p className=" text-xs text-th-primary-dark">名湯『異世界の湯』開拓記 ～アラフォー温泉マニアの転生先は、のんびり温泉天国でした～</p>
                    </div>

                    {/* Информация */}
                    <div className=" border-t-2 border-th-accent-medium mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className=" border-b-2 my-6 pb-6 lg:border-b-0 border-th-accent-medium col-span-full lg:col-span-1 grid grid-cols-1 gap-2 h-fit">
                            {info.map((e, i) => (<div key={i} className="grid grid-cols-2">{e.name}<span>{e.value}</span></div>))}
                            <div className="mt-2">Жанры:{genres.map((e, i) => <span key={i}> {e}</span>)}</div>
                        </div>
                        <div className=" md:my-6 p-6 col-span-1 bg-th-bg-secondary rounded-3xl h-[30rem] lg:h-[21rem] text-sm">
                            <div className=" overflow-y-scroll h-full">
                                {[...Array(100)].map((e, i) => <div key={i} className="mb-4"><Link className="text-th-primary-medium no-underline hover:underline"><p>Том 1 Глава 130</p> Пробуждение силы</Link></div>)}
                            </div>
                        </div>
                    </div>
                    <p className="text-center px-2 my-5">Акицу Мидори настигла участь многих японских трудоголиков
                         – неожиданная смерть от переутомления. При жизни Мидори страдала 
                         синдромом «плюшофила»: ей постоянно хотелось тискать пушистых котиков
                          и собачек. Праведная девушка заинтересовала бога перерождения, которому
                           нужен был надежный исполнитель для важной миссии. Мидори соглашается стать посланником
                           , если ее новая жизнь будет наполнена обнимашками с питомцами.
                            Юная наследница семьи Осфе легко ладит со всеми животными и даже умеет
                             с ними разговаривать. Малышка Нефертима свободно общается с птицами,
                              собаками, котами, даже разумные животные-хранители считают ее своей. К пяти годам Нефертима
                               перезнакомилась со всей фауной отцовского поместья. Наконец-то мечта Мидори из той жизни сбылась: пушистых обнимашек
                                более чем достаточно. Осталось лишь вспомнить, чего она сама наобещала богу взамен.</p>
                </div>
               
            </div>
        </main>
    )
}