@extends('layouts.admin')

@section('title', 'Users List')
@section('content-header', 'Users List')
@section('content-actions')
    <a href="{{ route('users.create') }}" class="btn btn-primary">Post users</a>
@endsection
@section('content')
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>Created_At</th>
                        <th>Update_At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <th>{{ $user->id }}</th>
                            <th>{{ $user->name }}</th>
                            <th>{{ $user->email }}</th>
                            <th>{{ $user->created_at }}</th>
                            <th>{{ $user->updated_at }}</th>
                            <th>
                                <a class="btn btn-primary" href="{{ route('users.edit', $user) }}"><i
                                        class="fas fa-edit"></i></a>
                                <a class="btn btn-info" href="{{ route('users.show', $user) }}"><i
                                        class="fas fa-eye"></i></a>
                                <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                            </th>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
