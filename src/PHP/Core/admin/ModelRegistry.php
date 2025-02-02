<?php

namespace JSAP\PHP\Core\admin;

class ModelRegistry {
    private $filePath;
    private $models;

    public function __construct($filePath = __DIR__.'../../../../config/models.json') {
        $this->filePath = $filePath;
        $this->models = $this->loadModels();
    }

    // Load models from the models.json configuration file
    private function loadModels() {
        if (file_exists($this->filePath)) {
            $json = file_get_contents($this->filePath);
            return json_decode($json, true)['models'];
        }
        return [];
    }

    // Get the list of registered models
    public function getRegisteredModels() {
        return $this->models;
    }

    // Register a new model
    public function registerModel($modelName, $description, $controller = '') {
        // Check if model is already registered
        foreach ($this->models as $model) {
            if ($model['name'] == $modelName) {
                return; // Model already registered
            }
        }

        // Add new model
        $newModel = [
            'name' => $modelName,
            'description' => $description,
            'controller' => $controller
        ];

        // Add model and save to file
        $this->models[] = $newModel;
        $this->saveModels();
    }

    // Save the updated models list back to the models.json file
    private function saveModels() {
        $json = json_encode(['models' => $this->models], JSON_PRETTY_PRINT);
        file_put_contents($this->filePath, $json);
    }
}

?>