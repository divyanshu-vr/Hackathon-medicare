import { useState } from 'react';
import { X, Plus, Check, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { GradientLight } from './design/Benefits';

const MedicineChatInterface = () => {
  const [medicines, setMedicines] = useState([{ id: 1, name: '' }]);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addMedicineInput = () => {
    setMedicines([
      ...medicines, 
      { id: medicines.length + 1, name: '' }
    ]);
  };

  const removeMedicineInput = (idToRemove) => {
    if (medicines.length > 1) {
      setMedicines(medicines.filter(med => med.id !== idToRemove));
    }
  };

  const updateMedicineName = (id, newName) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, name: newName } : med
    ));
  };

  const checkMedicineInteraction = async () => {
    setIsLoading(true);
    setAiResponse('');
  
    try {
      const medicineNames = medicines.map(med => med.name).filter(name => name.trim());
      
      const response = await fetch('http://localhost:5000/api/check-medicine-interaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          medicines: medicineNames
        })
      });
  
      if (!response.ok) {
        throw new Error('Interaction check failed');
      }
  
      const data = await response.json();
      setAiResponse(data.interaction);
    } catch (error) {
      setAiResponse('Error checking medication interaction: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Medicine Interaction Checker</h2>
      <div className="space-y-4">
        {medicines.map((med, index) => (
          <div key={med.id} className="flex space-x-2">
            <input 
              className="flex-grow border rounded px-2 py-1"
              placeholder={`Enter medicine ${index + 1}`}
              value={med.name}
              onChange={(e) => updateMedicineName(med.id, e.target.value)}
            />
            {medicines.length > 1 && (
              <button 
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => removeMedicineInput(med.id)}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        
        <div className="flex space-x-2">
          <button 
            className="flex-grow border rounded p-2 flex items-center justify-center"
            onClick={addMedicineInput}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Medicine
          </button>
        </div>

        <button 
          onClick={checkMedicineInteraction} 
          disabled={medicines.filter(med => med.name.trim()).length < 2 || isLoading}
          className="w-full bg-n-4 text-white p-2 rounded flex items-center justify-center disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Checking...
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              Check Interaction
            </>
          )}
        </button>
        
        {aiResponse && (
          <div className="mt-4 p-3 bg-n-7 rounded">
            <ReactMarkdown className="text-sm overflow-auto">{aiResponse}</ReactMarkdown>
          </div>
        )}
      </div>
      <GradientLight />
    </div>
  );
};

export default MedicineChatInterface;