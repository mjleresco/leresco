<?php

namespace JSAP\App\Controllers\SPAs;

use JSAP\PHP\Core\SPAController;
use JSAP\App\Models\Projects;
use JSAP\App\Models\ContactMessages;

class PortfolioController extends SPAController
{
    public function index($req)
    {
        $this->init('portfolio', ['title' => 'My Portfolio']);
    }

    public function me($req)
    {
        $this->init('me', ['title' => 'My Portfolio - Me']);
    }

    public function getProjects()
    {
        try {
            $projectsModel = new Projects();
            $projects = $projectsModel->selectFiltered([], ['orderBy' => 'created_at', 'orderDirection' => 'DESC']);

            foreach ($projects as &$project) {
                $imageData = $project['image'];
                $imageType = getimagesizefromstring($imageData);
                if ($imageType === false) {
                    // Handle the case where the image data is invalid
                    $project['image'] = null;
                } else {
                    $mimeType = $imageType['mime'];
                    $project['image'] = 'data:' . $mimeType . ';base64,' . base64_encode($imageData);
                }
                $project['skills'] = explode(', ', $project['skills']);
                $project['created_at'] = strtotime($project['created_at']);
            }

            echo parent::jsonResponse(true, $projects);
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }

    public function getProject($id)
    {
        try {
            $projectsModel = new Projects();
            $project = $projectsModel->selectOne(['id' => $id]);

            if (empty($project)) {
                echo parent::jsonResponse(false, array('error' => 'Project not found'));
                return;
            }

            $project = $project[0];
            $imageData = $project['image'];
            $imageType = getimagesizefromstring($imageData);
            if ($imageType === false) {
                // Handle the case where the image data is invalid
                $project['image'] = null;
            } else {
                $mimeType = $imageType['mime'];
                $project['image'] = 'data:' . $mimeType . ';base64,' . base64_encode($imageData);
            }
            $project['skills'] = explode(', ', $project['skills']);
            $project['created_at'] = strtotime($project['created_at']);

            echo parent::jsonResponse(true, $project);
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }

    public function sendMessage()
    {
        try {
            $requestData = json_decode(file_get_contents('php://input'), true);
            $contactMessagesModel = new ContactMessages();
            $result = $contactMessagesModel->create($requestData);

            echo parent::jsonResponse(true, array('message' => 'Message sent successfully'));
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }

    public function getMessages()
    {
        try {
            $contactMessagesModel = new ContactMessages();
            $messages = $contactMessagesModel->selectMultiple();

            echo parent::jsonResponse(true, $messages);
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }

    public function getMessage($id)
    {
        try {
            $contactMessagesModel = new ContactMessages();
            $message = $contactMessagesModel->selectOne(['id' => $id]);

            if (empty($message)) {
                echo parent::jsonResponse(false, array('error' => 'Message not found'));
                return;
            }

            echo parent::jsonResponse(true, $message[0]);
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }
    
    public function updateMessage($id)
    {
        try {
            $requestData = json_decode(file_get_contents('php://input'), true);
            $contactMessagesModel = new ContactMessages();
            $result = $contactMessagesModel->update($id, $requestData);
    
            echo parent::jsonResponse(true, array('message' => 'Message updated successfully'));
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }
    
    public function deleteMessage($id)
    {
        try {
            $contactMessagesModel = new ContactMessages();
            $result = $contactMessagesModel->delete($id);
    
            echo parent::jsonResponse(true, array('message' => 'Message deleted successfully'));
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }
    
    public function getUnreadMessages()
    {
        try {
            $contactMessagesModel = new ContactMessages();
            $messages = $contactMessagesModel->selectMultiple(['read' => 'No']);
    
            echo parent::jsonResponse(true, $messages);
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }
    
    public function markAsRead($id)
    {
        try {
            $contactMessagesModel = new ContactMessages();
            $result = $contactMessagesModel->update($id, ['read' => 'Yes']);
    
            echo parent::jsonResponse(true, array('message' => 'Message marked as read'));
        } catch (Exception $e) {
            echo parent::jsonResponse(false, array('error' => $e->getMessage()));
        }
    }
    
}



?>




















