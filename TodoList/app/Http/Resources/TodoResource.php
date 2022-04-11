<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $todo_at = new Carbon($this->created_at);
        return [
            'id' => $this->id,
            'title' => $this->title,
            'detail' => $this->detail,
            'complete' => $this->complete,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'todo_at' => $todo_at->format('Y/m/d'),
        ];
    }
}
