<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticlesUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $article_id = $this->route('articles')->id;
        return [
            'userid' => 'required',
            'category' => 'required',
            'thumbnail' => 'required|image',
            'title' => 'required|string|max:500',
            'body' => 'nullable|string',
            'slug' => 'required|string|max:500|unique:articles,slug,'.$article_id,
            'status' => 'required|boolean'
        ];
    }
}
