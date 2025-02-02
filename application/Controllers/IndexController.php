<?php

namespace JSAP\App\Controllers;

use JSAP\PHP\Core\Controller;

class IndexController extends Controller{
    public function home(){
        $this->view->renderSPA('app-name/index', ['title' => 'JS Framework App', 'c-page' => 'JavaScript']);
    }
    
    public function blog(){
        $this->view->render('blog', ['title' => 'Blog', 'c-page' => 'Blog']);
    }
    
    public function donate(){
        $this->view->render('donate', ['title' => 'Donate Now', 'c-page' => 'Donate Now']);
    }
    
    public function event($req, $event){
        
        $this->view->render('event', ['title' => 'Event | '.$event, 'c-page' => 'Event']);
    }
    
    public function impact(){
        $this->view->render('impact', ['title' => 'Impacted Stories', 'c-page' => 'Impacted Stories']);
    }
    
    public function volunteer(){
        $this->view->render('volunteer', ['title' => 'Volunteer', 'c-page' => 'Volunteer']);
    }
    
    public function contact(){
        $this->view->render('contact', ['title' => 'Contact Us', 'c-page' => 'Contact Us']);
    }
    
    public function faqs(){
        $this->view->render('faqs', ['title' => 'Frequently Asked Questions', 'c-page' => 'Frequently Asked Questions']);
    }
    
    public function about(){
        $this->view->render('about', ['title' => 'About Us', 'c-page' => 'About Us']);
    }
    
}

?>

