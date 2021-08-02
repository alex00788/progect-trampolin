import {Injectable} from '@angular/core'

export interface Post {
    title: string
    text: string
    id: number
}

@Injectable({providedIn: 'root'})
export class PostsService {
    posts: Post[] = [
        {title: 'Быстрый результат', text: 'Научим делать сальто на первом занятии', id: 11},
        {title: 'Уникальность', text: 'Уникальная методика проведения занятий', id: 22},
        {title: 'Тренеры', text: 'Самые лучшие тренеры со всего мира найдут подход к каждому ', id: 33},
        {title: 'Цены', text: 'Первое занятие бесплатно и абонементы со скидками', id: 44},
    ]

    getById(id: number) {
        return this.posts.find(p => p.id === id)
    }
}
