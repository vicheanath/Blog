@extends('layouts.admin')

@section('title', 'Post Category')
@section('content-header', 'Post category')

@section('content')

    <form action="{{ route('category.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input id="title" class="form-control @error('name') is-invalid @enderror" id="title"
                        placeholder="title" type="text" name="title" value="{{ old('title') }}">
                    @error('title')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" class="form-control @error('name') is-invalid @enderror" name="category">
                        <option>Text</option>
                        <option>Text</option>
                        <option>Text</option>
                    </select>
                    @error('category')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" name="thumbnail">
                        <label class="custom-file-label" for="customFile">Thumbnail</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="detail">Detail</label>
                    <textarea id="detail" class="textarea" id="detail" placeholder="detail" type="text"
                        name="detail" >{{ old('detail') }}</textarea>
                    @error('detail')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success ">
                    <input type="checkbox" class="custom-control-input" id="customSwitch3">
                    <label class="custom-control-label" for="customSwitch3">Status</label>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary float-right">Create</button>

                    <button type="submit" class="btn btn-danger float-right" style="margin-right: 5px;">Cencel</button>
                </div>
            </div>
        </div>
    </form>

@endsection
