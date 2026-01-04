const { useState, useEffect } = React;

// Storage
if (!window.storage) {
  window.storage = {
    async get(key) {
      const value = localStorage.getItem(key);
      return value ? { key, value } : null;
    },
    async set(key, value) {
      localStorage.setItem(key, value);
      return { key, value };
    },
    async delete(key) {
      localStorage.removeItem(key);
      return { key, deleted: true };
    },
    async list(prefix = '') {
      const keys = Object.keys(localStorage).filter(k => k.startsWith(prefix));
      return { keys };
    }
  };
}

// Icônes
const Camera = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
const FileText = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const List = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/></svg>;
const Eye = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const X = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const Trash2 = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>;
const Edit3 = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const Save = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>;
const Download = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const Pencil = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const Video = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
const Shield = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Zap = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Calendar = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const Send = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const User = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Building = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/></svg>;
const MapPin = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;

function ResumeChantierApp() {
  const [view, setView] = useState('choice');
  const [installationType, setInstallationType] = useState(null);
  const [rapports, setRapports] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [nvrPhoto, setNvrPhoto] = useState(null);
  const [centralePhoto, setCentralePhoto] = useState(null);
  const [compteurPhotos, setCompteurPhotos] = useState([]);
  const [borneEmplacementPhoto, setBorneEmplacementPhoto] = useState(null);
  const [selectedRapport, setSelectedRapport] = useState(null);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [photoAnnotations, setPhotoAnnotations] = useState([]);
  const [annotationMode, setAnnotationMode] = useState('point');
  const [drawingLine, setDrawingLine] = useState(null);
  const [formData, setFormData] = useState({
    commercialName: '',
    clientName: '',
    address: '',
    visitDate: new Date().toISOString().split('T')[0],
    installationType: '',
    materielSpecifique: { echafaudage: false, tripleEchelle: false, outillageDetails: '' },
    descriptionTechnique: '',
    tubages: { t16: '', t20: '', t25: '', gs: '', gd: '', gt: '', gdplt: '' },
    documentsASigner: { reception: false, cessionDroits: false },
    nvrEmplacement: '',
    nvrRaccordement: '',
    nvrBranchementInternet: [],
    cameras: [],
    centraleEmplacement: '',
    centraleRaccordement: '',
    centraleBranchementInternet: [],
    centraleTelесurveillance: '',
    elementsFilaires: [],
    elementsRadio: [],
    compteurType: '',
    placeCoffret: '',
    amperageCompteur: '',
    borneEmplacement: '',
    borneMoinsDe10m: '',
    borneDistance: '',
    borneCablage: '',
    borneCompteurGestion: '',
    borneCompteurKwh: '',
    borneConnexion: '',
    borneConnexionDetails: ''
  });

  useEffect(() => {
    loadRapports();
  }, []);

  const loadRapports = async () => {
    try {
      const result = await window.storage.list('rapport:');
      if (result && result.keys) {
        const loadedRapports = await Promise.all(
          result.keys.map(async (key) => {
            try {
              const data = await window.storage.get(key);
              return data ? JSON.parse(data.value) : null;
            } catch {
              return null;
            }
          })
        );
        setRapports(loadedRapports.filter(r => r !== null).sort((a, b) => 
          new Date(b.visitDate) - new Date(a.visitDate)
        ));
      }
    } catch (error) {
      console.error('Erreur chargement rapports:', error);
    }
  };

  const handlePhotoCapture = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => [...prev, {
          id: Date.now() + Math.random(),
          data: reader.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
  };

  const handleNvrPhotoCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNvrPhoto({
          id: Date.now(),
          data: reader.result,
          name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeNvrPhoto = () => {
    setNvrPhoto(null);
  };

  const handleCentralePhotoCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCentralePhoto({
          id: Date.now(),
          data: reader.result,
          name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeCentralePhoto = () => {
    setCentralePhoto(null);
  };

  const handleCompteurPhotoCapture = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompteurPhotos(prev => [...prev, {
          id: Date.now() + Math.random(),
          data: reader.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeCompteurPhoto = (id) => {
    setCompteurPhotos(prev => prev.filter(p => p.id !== id));
  };

  const handleBorneEmplacementPhotoCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBorneEmplacementPhoto({
          id: Date.now(),
          data: reader.result,
          name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBorneEmplacementPhoto = () => {
    setBorneEmplacementPhoto(null);
  };

  const startNewRapport = (type) => {
    setInstallationType(type);
    setFormData({
      ...formData,
      installationType: type,
      visitDate: new Date().toISOString().split('T')[0]
    });
    setView('form');
  };

  const handleSubmit = async () => {
    if (!formData.commercialName || !formData.clientName) {
      alert('Veuillez remplir au minimum le nom du commercial et du client');
      return;
    }

    const rapport = {
      id: 'rapport:' + Date.now(),
      ...formData,
      photos: photos,
      nvrPhoto: nvrPhoto,
      centralePhoto: centralePhoto,
      compteurPhotos: compteurPhotos,
      borneEmplacementPhoto: borneEmplacementPhoto,
      createdAt: new Date().toISOString()
    };

    try {
      await window.storage.set(rapport.id, JSON.stringify(rapport));
      await loadRapports();
      
      setFormData({
        commercialName: '',
        clientName: '',
        address: '',
        visitDate: new Date().toISOString().split('T')[0],
        installationType: '',
        materielSpecifique: { echafaudage: false, tripleEchelle: false, outillageDetails: '' },
        descriptionTechnique: '',
        tubages: { t16: '', t20: '', t25: '', gs: '', gd: '', gt: '', gdplt: '' },
        documentsASigner: { reception: false, cessionDroits: false },
        nvrEmplacement: '',
        nvrRaccordement: '',
        nvrBranchementInternet: [],
        cameras: [],
        centraleEmplacement: '',
        centraleRaccordement: '',
        centraleBranchementInternet: [],
        centraleTelесurveillance: '',
        elementsFilaires: [],
        elementsRadio: [],
        compteurType: '',
        placeCoffret: '',
        amperageCompteur: '',
        borneEmplacement: '',
        borneMoinsDe10m: '',
        borneDistance: '',
        borneCablage: '',
        borneCompteurGestion: '',
        borneCompteurKwh: '',
        borneConnexion: '',
        borneConnexionDetails: ''
      });
      setPhotos([]);
      setNvrPhoto(null);
      setCentralePhoto(null);
      setCompteurPhotos([]);
      setBorneEmplacementPhoto(null);
      setInstallationType(null);
      setView('list');
      alert('Rapport enregistré avec succès !');
    } catch (error) {
      alert('Erreur lors de l\'enregistrement du rapport');
      console.error(error);
    }
  };
  const deleteRapport = async (id) => {
    if (confirm('Voulez-vous vraiment supprimer ce rapport ?')) {
      try {
        await window.storage.delete(id);
        await loadRapports();
        if (selectedRapport?.id === id) {
          setSelectedRapport(null);
        }
      } catch (error) {
        alert('Erreur lors de la suppression');
      }
    }
  };

  const viewRapport = (rapport) => {
    setSelectedRapport(rapport);
    setView('detail');
  };

  const editRapport = (rapport) => {
    setFormData({
      commercialName: rapport.commercialName || '',
      clientName: rapport.clientName || '',
      address: rapport.address || '',
      visitDate: rapport.visitDate || new Date().toISOString().split('T')[0],
      installationType: rapport.installationType || '',
      materielSpecifique: rapport.materielSpecifique || { echafaudage: false, tripleEchelle: false, outillageDetails: '' },
      descriptionTechnique: rapport.descriptionTechnique || '',
      tubages: rapport.tubages || { t16: '', t20: '', t25: '', gs: '', gd: '', gt: '', gdplt: '' },
      documentsASigner: rapport.documentsASigner || { reception: false, cessionDroits: false },
      nvrEmplacement: rapport.nvrEmplacement || '',
      nvrRaccordement: rapport.nvrRaccordement || '',
      nvrBranchementInternet: rapport.nvrBranchementInternet || [],
      cameras: rapport.cameras || [],
      centraleEmplacement: rapport.centraleEmplacement || '',
      centraleRaccordement: rapport.centraleRaccordement || '',
      centraleBranchementInternet: rapport.centraleBranchementInternet || [],
      centraleTelесurveillance: rapport.centraleTelесurveillance || '',
      elementsFilaires: rapport.elementsFilaires || [],
      elementsRadio: rapport.elementsRadio || [],
      compteurType: rapport.compteurType || '',
      placeCoffret: rapport.placeCoffret || '',
      amperageCompteur: rapport.amperageCompteur || '',
      borneEmplacement: rapport.borneEmplacement || '',
      borneMoinsDe10m: rapport.borneMoinsDe10m || '',
      borneDistance: rapport.borneDistance || '',
      borneCablage: rapport.borneCablage || '',
      borneCompteurGestion: rapport.borneCompteurGestion || '',
      borneCompteurKwh: rapport.borneCompteurKwh || '',
      borneConnexion: rapport.borneConnexion || '',
      borneConnexionDetails: rapport.borneConnexionDetails || ''
    });
    setPhotos(rapport.photos || []);
    setNvrPhoto(rapport.nvrPhoto || null);
    setCentralePhoto(rapport.centralePhoto || null);
    setCompteurPhotos(rapport.compteurPhotos || []);
    setBorneEmplacementPhoto(rapport.borneEmplacementPhoto || null);
    setInstallationType(rapport.installationType);
    deleteRapport(rapport.id);
    setView('form');
  };

  const downloadRapport = (rapport) => {
    let htmlContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Rapport ${rapport.clientName}</title>
    <style>body{font-family:Arial;padding:20px}.header{text-align:center;border-bottom:3px solid #0891b2;padding-bottom:20px}.section{margin:20px 0;padding:15px;border:1px solid #ddd}.photo{max-width:100%;margin:10px 0}</style>
    </head><body><div class="header"><h1>VISIOME SECURITY SYSTEMS</h1><p>Résumé de chantier</p></div>
    <div class="section"><h2>Informations</h2><p><strong>Type:</strong> ${rapport.installationType}</p>
    <p><strong>Commercial:</strong> ${rapport.commercialName}</p><p><strong>Client:</strong> ${rapport.clientName}</p>
    ${rapport.address ? `<p><strong>Adresse:</strong> ${rapport.address}</p>` : ''}
    <p><strong>Date:</strong> ${new Date(rapport.visitDate).toLocaleDateString('fr-FR')}</p></div>`;
    
    if (rapport.photos && rapport.photos.length > 0) {
      htmlContent += `<div class="section"><h2>Photos</h2>`;
      rapport.photos.forEach(photo => {
        htmlContent += `<img class="photo" src="${photo.data}">`;
      });
      htmlContent += `</div>`;
    }
    
    htmlContent += `</body></html>`;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rapport_${rapport.clientName}_${rapport.visitDate}.html`;
    link.click();
    URL.revokeObjectURL(url);
    alert('Rapport téléchargé ! Ouvrez-le et faites "Imprimer > PDF"');
  };

  const openPhotoEditor = (photo, source) => {
    setEditingPhoto({ ...photo, source });
    setPhotoAnnotations(photo.annotations || []);
  };

  const closePhotoEditor = () => {
    setEditingPhoto(null);
    setPhotoAnnotations([]);
    setAnnotationMode('point');
    setDrawingLine(null);
  };

  const handlePhotoClick = (e) => {
    if (!editingPhoto) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (annotationMode === 'point') {
      setPhotoAnnotations([...photoAnnotations, { type: 'point', x, y, id: Date.now() }]);
    } else if (annotationMode === 'line') {
      if (!drawingLine) {
        setDrawingLine({ x1: x, y1: y });
      } else {
        setPhotoAnnotations([...photoAnnotations, { 
          type: 'line', 
          x1: drawingLine.x1, 
          y1: drawingLine.y1, 
          x2: x, 
          y2: y, 
          id: Date.now() 
        }]);
        setDrawingLine(null);
      }
    }
  };

  const removeAnnotation = (annotationId) => {
    setPhotoAnnotations(photoAnnotations.filter(a => a.id !== annotationId));
  };

  const savePhotoAnnotations = () => {
    const updatedPhoto = { ...editingPhoto, annotations: photoAnnotations };
    if (editingPhoto.source === 'nvr') {
      setNvrPhoto(updatedPhoto);
    } else if (editingPhoto.source === 'centrale') {
      setCentralePhoto(updatedPhoto);
    } else if (editingPhoto.source === 'borneEmplacement') {
      setBorneEmplacementPhoto(updatedPhoto);
    } else if (editingPhoto.source === 'general') {
      setPhotos(photos.map(p => p.id === editingPhoto.id ? updatedPhoto : p));
    } else if (editingPhoto.source === 'compteur') {
      setCompteurPhotos(compteurPhotos.map(p => p.id === editingPhoto.id ? updatedPhoto : p));
    }
    closePhotoEditor();
  };

  const renderAnnotations = (annotations, size = 'normal') => {
    if (!annotations || annotations.length === 0) return null;
    return annotations.map((ann) => {
      if (ann.type === 'point' || !ann.type) {
        const pointSize = size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-6 h-6';
        return (
          <div key={ann.id} style={{position: 'absolute',left: `${ann.x}%`,top: `${ann.y}%`,transform: 'translate(-50%, -50%)'}}>
            <div className={`${pointSize} bg-red-600 rounded-full border-2 border-white shadow-lg`}></div>
          </div>
        );
      } else if (ann.type === 'line') {
        const strokeWidth = size === 'small' ? 2 : size === 'medium' ? 3 : 4;
        return (
          <svg key={ann.id} style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',pointerEvents: 'none'}}>
            <line x1={`${ann.x1}%`} y1={`${ann.y1}%`} x2={`${ann.x2}%`} y2={`${ann.y2}%`} stroke="#2563eb" strokeWidth={strokeWidth} strokeLinecap="round"/>
          </svg>
        );
      }
      return null;
    });
  };

  const addCamera = () => {
    setFormData({...formData,cameras: [...formData.cameras, { id: Date.now(), type: '', typeAutre: '', position: '', photos: [] }]});
  };

  const updateCamera = (id, field, value) => {
    setFormData({...formData,cameras: formData.cameras.map(cam => cam.id === id ? { ...cam, [field]: value } : cam)});
  };

  const removeCamera = (id) => {
    setFormData({...formData,cameras: formData.cameras.filter(cam => cam.id !== id)});
  };

  const addCameraPhoto = (cameraId, photoData) => {
    setFormData({...formData,cameras: formData.cameras.map(cam => cam.id === cameraId ? { ...cam, photos: [...(cam.photos || []), photoData] } : cam)});
  };

  const removeCameraPhoto = (cameraId, photoId) => {
    setFormData({...formData,cameras: formData.cameras.map(cam => cam.id === cameraId ? { ...cam, photos: cam.photos.filter(p => p.id !== photoId) } : cam)});
  };

  const handleCameraPhotoCapture = (cameraId, e) => {
    Array.from(e.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        addCameraPhoto(cameraId, {id: Date.now() + Math.random(),data: reader.result,name: file.name});
      };
      reader.readAsDataURL(file);
    });
  };

  const addElementFilaire = () => {
    setFormData({...formData,elementsFilaires: [...formData.elementsFilaires, { id: Date.now(), type: '', typeAutre: '', emplacement: '', photos: [] }]});
  };

  const updateElementFilaire = (id, field, value) => {
    setFormData({...formData,elementsFilaires: formData.elementsFilaires.map(el => el.id === id ? { ...el, [field]: value } : el)});
  };

  const removeElementFilaire = (id) => {
    setFormData({...formData,elementsFilaires: formData.elementsFilaires.filter(el => el.id !== id)});
  };

  const addElementRadio = () => {
    setFormData({...formData,elementsRadio: [...formData.elementsRadio, { id: Date.now(), type: '', typeAutre: '', emplacement: '', photos: [] }]});
  };

  const updateElementRadio = (id, field, value) => {
    setFormData({...formData,elementsRadio: formData.elementsRadio.map(el => el.id === id ? { ...el, [field]: value } : el)});
  };

  const removeElementRadio = (id) => {
    setFormData({...formData,elementsRadio: formData.elementsRadio.filter(el => el.id !== id)});
  };
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 pb-20">
      {editingPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-lg font-bold text-gray-800">Annoter la photo</h3>
              <button onClick={closePhotoEditor} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4 bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Choisissez votre outil :</p>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => {setAnnotationMode('point');setDrawingLine(null);}}
                    className={`py-4 px-4 rounded-lg font-bold flex flex-col items-center justify-center gap-2 transition-all transform ${annotationMode === 'point' ? 'bg-red-600 text-white shadow-lg scale-105 ring-4 ring-red-200' : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300'}`}>
                    <div className={`w-8 h-8 rounded-full ${annotationMode === 'point' ? 'bg-white' : 'bg-red-600'}`}></div>
                    <span className="text-sm">Points rouges</span>
                    <span className="text-xs opacity-75">Emplacements</span>
                  </button>
                  <button onClick={() => {setAnnotationMode('line');setDrawingLine(null);}}
                    className={`py-4 px-4 rounded-lg font-bold flex flex-col items-center justify-center gap-2 transition-all transform ${annotationMode === 'line' ? 'bg-blue-600 text-white shadow-lg scale-105 ring-4 ring-blue-200' : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300'}`}>
                    <div className="flex items-center gap-1">
                      <div className={`w-12 h-1 rounded ${annotationMode === 'line' ? 'bg-white' : 'bg-blue-600'}`}></div>
                    </div>
                    <span className="text-sm">Lignes bleues</span>
                    <span className="text-xs opacity-75">Passages câbles</span>
                  </button>
                </div>
              </div>
              <div className="mb-3 p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                <p className="text-sm text-cyan-900 font-medium">
                  {annotationMode === 'point' ? '🔴 Cliquez sur l\'image pour placer un point rouge (emplacement d\'installation)' : drawingLine ? '🔵 Cliquez pour terminer la ligne (passage de câble)' : '🔵 Cliquez pour commencer une ligne (passage de câble)'}
                </p>
              </div>
              <div className="relative inline-block max-w-full">
                <img src={editingPhoto.data} alt="Photo à annoter" className="max-w-full h-auto rounded-lg cursor-crosshair" onClick={handlePhotoClick}/>
                {photoAnnotations.map((annotation) => (
                  annotation.type === 'point' || !annotation.type ? (
                    <div key={annotation.id} style={{position: 'absolute',left: `${annotation.x}%`,top: `${annotation.y}%`,transform: 'translate(-50%, -50%)'}} className="group">
                      <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white shadow-lg relative">
                        <button onClick={(e) => {e.stopPropagation();removeAnnotation(annotation.id);}}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs">×</button>
                      </div>
                    </div>
                  ) : (
                    <svg key={annotation.id} style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',pointerEvents: 'none'}}>
                      <line x1={`${annotation.x1}%`} y1={`${annotation.y1}%`} x2={`${annotation.x2}%`} y2={`${annotation.y2}%`} stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/>
                      <circle cx={`${(annotation.x1 + annotation.x2) / 2}%`} cy={`${(annotation.y1 + annotation.y2) / 2}%`} r="12" fill="white" stroke="#2563eb" strokeWidth="2"
                        style={{pointerEvents: 'all',cursor: 'pointer'}} onClick={(e) => {e.stopPropagation();removeAnnotation(annotation.id);}}/>
                      <text x={`${(annotation.x1 + annotation.x2) / 2}%`} y={`${(annotation.y1 + annotation.y2) / 2}%`} textAnchor="middle" dominantBaseline="central"
                        fill="#2563eb" fontSize="16" fontWeight="bold" style={{pointerEvents: 'none'}}>×</text>
                    </svg>
                  )
                ))}
                {drawingLine && (
                  <div style={{position: 'absolute',left: `${drawingLine.x1}%`,top: `${drawingLine.y1}%`,transform: 'translate(-50%, -50%)'}}>
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex gap-3">
                <button onClick={savePhotoAnnotations} className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-700 transition">
                  <Save size={20}/>Enregistrer les annotations
                </button>
                <button onClick={closePhotoEditor} className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">Annuler</button>
              </div>
              {photoAnnotations.length > 0 && (
                <p className="text-sm text-gray-600 mt-3 text-center">
                  {photoAnnotations.filter(a => a.type === 'point').length} point{photoAnnotations.filter(a => a.type === 'point').length > 1 ? 's' : ''} • 
                  {photoAnnotations.filter(a => a.type === 'line').length} ligne{photoAnnotations.filter(a => a.type === 'line').length > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white text-gray-800 p-4 shadow-lg sticky top-0 z-10 border-b-4 border-cyan-500">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-cyan-600">VISIOME</h1>
          <p className="text-xs text-gray-500 tracking-wider">SECURITY SYSTEMS</p>
          <p className="text-sm text-gray-600 mt-2 font-semibold">Résumé de chantier</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-cyan-500 shadow-lg flex z-20">
        <button onClick={() => {setView('choice');setInstallationType(null);}} className={`flex-1 flex flex-col items-center justify-center py-3 transition ${view === 'choice' || view === 'form' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600'}`}>
          <FileText size={20}/><span className="text-xs mt-1">Nouveau</span>
        </button>
        <button onClick={() => setView('list')} className={`flex-1 flex flex-col items-center justify-center py-3 transition ${view === 'list' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600'}`}>
          <List size={20}/><span className="text-xs mt-1">Rapports</span>
        </button>
        <button onClick={() => setView('detail')} disabled={!selectedRapport} className={`flex-1 flex flex-col items-center justify-center py-3 transition ${view === 'detail' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600'}`}>
          <Eye size={20} className={!selectedRapport ? 'opacity-50' : ''}/><span className="text-xs mt-1">Détail</span>
        </button>
      </div>
{view === 'choice' && (
        <div className="p-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choisissez le type d'installation</h2>
          <div className="space-y-4">
            <button onClick={() => startNewRapport('Vidéosurveillance')} className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-cyan-500 flex items-center gap-4">
              <div className="bg-cyan-100 p-4 rounded-full"><Video size={32} className="text-cyan-600"/></div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-gray-800">Vidéosurveillance</h3>
                <p className="text-sm text-gray-600">Caméras IP, NVR, enregistrement</p>
              </div>
            </button>
            <button onClick={() => startNewRapport('Alarme')} className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-red-500 flex items-center gap-4">
              <div className="bg-red-100 p-4 rounded-full"><Shield size={32} className="text-red-600"/></div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-gray-800">Alarme</h3>
                <p className="text-sm text-gray-600">Centrale, détecteurs, télésurveillance</p>
              </div>
            </button>
            <button onClick={() => startNewRapport('Borne de recharge')} className="w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-green-500 flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-full"><Zap size={32} className="text-green-600"/></div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-gray-800">Borne de recharge</h3>
                <p className="text-sm text-gray-600">Installation électrique pour véhicules</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {view === 'list' && (
        <div className="p-4 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Rapports enregistrés ({rapports.length})</h2>
          {rapports.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <FileText size={48} className="mx-auto mb-3 text-gray-400"/>
              <p className="text-gray-600">Aucun rapport pour le moment</p>
              <p className="text-sm text-gray-500 mt-1">Créez votre premier rapport</p>
            </div>
          ) : (
            <div className="space-y-3">
              {rapports.map((rapport) => (
                <div key={rapport.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition border-l-4 border-cyan-500">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800">{rapport.clientName}</h3>
                      <p className="text-sm text-gray-600">{rapport.commercialName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14}/>{new Date(rapport.visitDate).toLocaleDateString('fr-FR')}
                    </span>
                    {rapport.photos?.length > 0 && (
                      <span className="flex items-center gap-1">
                        <Camera size={14}/>{rapport.photos.length} photo{rapport.photos.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                  {rapport.installationType && (
                    <div className="mb-3 inline-block bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">{rapport.installationType}</div>
                  )}
                  <div className="flex gap-2">
                    <button onClick={() => viewRapport(rapport)} className="flex-1 p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition flex items-center justify-center gap-1 text-sm">
                      <Eye size={16}/>Voir
                    </button>
                    <button onClick={() => editRapport(rapport)} className="flex-1 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1 text-sm">
                      <Pencil size={16}/>Éditer
                    </button>
                    <button onClick={() => downloadRapport(rapport)} className="flex-1 p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-1 text-sm">
                      <Download size={16}/>PDF
                    </button>
                    <button onClick={() => deleteRapport(rapport.id)} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                      <Trash2 size={16}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {view === 'form' && installationType && (
        <div className="p-4 max-w-2xl mx-auto">
          <div className="mb-4 flex items-center gap-2">
            <button onClick={() => setView('choice')} className="text-cyan-600 font-medium">← Retour</button>
            <span className="text-gray-600">|</span>
            <span className="font-bold text-gray-800">{installationType}</span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-cyan-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User size={20} className="text-cyan-600"/>Informations de base
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du commercial *</label>
                <input type="text" value={formData.commercialName} onChange={(e) => setFormData({...formData, commercialName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Votre nom"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du client *</label>
                <input type="text" value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Nom du client"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Adresse complète"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date de visite</label>
                <input type="date" value={formData.visitDate} onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-cyan-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Photos générales ({photos.length})</h2>
            <label className="block w-full">
              <div className="border-2 border-dashed border-cyan-300 rounded-lg p-8 text-center cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition">
                <Camera size={48} className="mx-auto mb-2 text-cyan-600"/>
                <p className="text-gray-700 font-medium">Ajouter des photos</p>
                <p className="text-sm text-gray-500 mt-1">Appuyez pour prendre ou sélectionner</p>
              </div>
              <input type="file" accept="image/*" multiple onChange={handlePhotoCapture} className="hidden"/>
            </label>
            {photos.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <img src={photo.data} alt="Photo visite" className="w-full h-32 object-cover rounded-lg shadow"/>
                    {renderAnnotations(photo.annotations, 'small')}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition rounded-lg flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                      <button onClick={() => openPhotoEditor(photo, 'general')} className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 transition">
                        <Edit3 size={16}/>
                      </button>
                      <button onClick={() => removePhoto(photo.id)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition">
                        <X size={16}/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={handleSubmit} className="w-full bg-cyan-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-700 transition shadow-lg">
            <Send size={20}/>Enregistrer le rapport
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<ResumeChantierApp />, document.getElementById('root'));
