<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::table('users')->insert([
            [
                'name' => 'namake',
                'email' => 'namake@gmail.com',
                'password' => 'namanamake',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
            [
                'name' => 'koara',
                'email' => 'koara@gmail.com',
                'password' => 'koakoara',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
        ]);
    }
}
