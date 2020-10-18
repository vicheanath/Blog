@extends('layouts.admin')

@section('title', 'Articles List')
@section('content-header', 'Articles List')
@section('content-actions')
    <a href="{{ route('articles.create') }}" class="btn btn-primary">Post Articles</a>
@endsection
@section('content')
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>thumbnail</th>
                        <th>Status</th>
                        <th>Created_At</th>
                        <th>Update_At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($articles as $article)
                        <tr>
                            <th>{{ $article->id }}</th>
                            <th>{{ $article->title }}</th>
                            <th>{{ $article->thumbnail }}</th>
                            <th>{{ $article->active }}</th>
                            <th>{{ $article->created_at }}</th>
                            <th>{{ $article->updated_at }}</th>
                            <th>
                                <a class="btn btn-primary" href="{{ route('articles.edit', $article) }}"><i
                                        class="fas fa-edit"></i></a>
                                <a class="btn btn-info" href="{{ route('articles.show', $article) }}"><i
                                        class="fas fa-eye"></i></a>
                                <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                            </th>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $articles->render() }}
        </div>
    </div>
@endsection
