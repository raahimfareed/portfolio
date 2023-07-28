<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::get();
        return Inertia::render('Contact', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        $contacts = Contact::get();
        return Inertia::render('Admin/Contact', compact('contacts'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // TODO: Add Rate Limiting to this
        $validated = $request->validate([
            "name" => "required|max:255|string",
            "email" => "required|email",
            "message" => "required|max:1024",
        ]);

        Contact::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
