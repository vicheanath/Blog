@extends('layouts.admin')

@section('title', 'Dashbord')
@section('content-header', 'Dashbord')
@section('content-actions')
    <a href="{{ route('articles.create') }}" class="btn btn-primary">Dashbord</a>
@endsection
@section('content')
    <div class="card">
        <table class="table">
        @foreach ($server as $key => $val)
            <tr>
                <th>{{ $key }}</th>
                <th>{{ $val }}</th>
            </tr>
        @endforeach
    </table>
    </div>
@endsection
