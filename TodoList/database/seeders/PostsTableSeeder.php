<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::table('posts')->insert([
            [
                'title' => 'Room Cleaning',
                'detail' => 'Redecorate the room.',
                'complete' => '0',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
            [
                'title' => 'head wash',
                'detail' => "And while we're at it, clean the bathtub.",
                'complete' => '1',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
            [
                'title' => 'finish an assignment',
                'detail' => 'mathematics
                history of Japan
                Social Studies
                English',
                'complete' => '0',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
            [
                'title' => 'Procurement of foodstuffs',
                'detail' => 'Asian ginseng (Panax ginseng)
                pumpkin
                noodle',
                'complete' => '0',
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' =>  date("Y-m-d H:i:s")
            ],
        ]);
    }
}
