import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Post} from '../../posts.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostsAdServices} from '../shared/posts.admin.services';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

    form: FormGroup
    post: Post
    submitted = false

    constructor(
        private route: ActivatedRoute,
        private postService: PostsAdServices
    ) {
    }

    ngOnInit() {
        this.route.params.pipe
        (switchMap((params: Params) => {
                return this.postService.getById(params ['id']);
            })
        ).subscribe((post: Post) => {
            this.post = post
            this.form = new FormGroup({
                title: new FormControl(post.title, Validators.required),
                text: new FormControl(post.text, Validators.required)
            })
        })
    }

    submit() {
        if (this.form.invalid) {
            return
        }
        this.submitted = true
      //   this.postService.update( {
      //     ...this.post,
      //     text: this.form.value.text,
      //     title: this.form.value.title,
      // }).subscribe(() => {
      //       this.submitted = false
      //   })
    }
}


