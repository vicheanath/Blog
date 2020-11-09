@extends('layouts.admin')

@section('title', 'Post Category')
@section('content-header', 'Post category')

@section('content')

    <form action="{{ route('categories.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="name">name</label>
                    <input id="name" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="name"
                        type="text" name="name" value="{{ old('name') }}">
                    @error('name')
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
                    <label for="status">status</label>
                    <select id="status" class="form-control @error('status') is-invalid @enderror" name="status">
                        <option value="1" {{ old('status') == 1 ? 'selected' : '' }}>Activie</option>
                        <option value="0" {{ old('status') == 0 ? 'selected' : '' }}>InActivie</option>
                    </select>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary float-right">Create</button>
                    <a href="{{ route('categories.index') }}" class="btn btn-danger float-right"
                        style="margin-right: 5px;">Cencel</a>
                </div>
            </div>
        </div>
    </form>

@endsection
