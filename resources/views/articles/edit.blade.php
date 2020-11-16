@extends('layouts.admin')

@section('title', 'Edit articles')
@section('content-header', 'Edit articles')

@section('content')

    <form action="{{ route('articles.update', $articles) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="card">
            <div class="card-body">
                <input id="userid" id="userid" type="hidden" name="userid" value="{{ auth()->user()->id }}">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input id="title" class="form-control @error('title') is-invalid @enderror" id="title"
                        placeholder="title" type="text" name="title" value="{{ old('title', $articles->title) }}">
                    @error('title')
                    <span class="error invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="slug">slug</label>
                    <input id="slug" class="form-control @error('slug') is-invalid @enderror" id="slug" placeholder="slug"
                        type="text" name="slug" value="{{ old('slug', $articles->slug) }}">
                    @error('slug')
                    <span class="error invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" class="form-control @error('category') is-invalid @enderror" name="category">
                        @foreach ($categories as $key => $category)
                            <option value="{{ $key }}">{{ $category }}</option>
                        @endforeach
                    </select>
                    @error('category')
                    <span class="error invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <div class="custom-file">
                        <input type="file" value="{{ old('body', $articles->thumbnail) }}" class="custom-file-input  @error('thumbnail') is-invalid @enderror"
                            id="thumbnail" name="thumbnail">
                        <label class="custom-file-label" for="customFile">Thumbnail</label>
                    </div>
                    @error('thumbnail')
                    <span class="error invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="body">body</label>
                    <textarea id="body" class="textarea" id="body" placeholder="body" type="text"
                        name="body">{{ old('body', $articles->body) }}</textarea>
                    @error('body')
                    <span class="error invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="status">status</label>
                    <select id="status" class="form-control @error('status',$articles->status) is-invalid @enderror"
                        name="status">
                        <option value="1" {{ old('status') == 1 ? 'selected' : '' }}>Activie</option>
                        <option value="0" {{ old('status') == 0 ? 'selected' : '' }}>InActivie</option>
                    </select>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary float-right">Update</button>

                    <a href="{{ route('articles.index') }}" class="btn btn-danger float-right"
                        style="margin-right: 5px;">Cencel</a>
                </div>
            </div>
        </div>
    </form>

@endsection
