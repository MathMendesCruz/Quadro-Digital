// Configuração de slides com extensões corretas
var SLIDES_CONFIG = [
    // Imagens com .jpg
    { id: 'foto1', ext: 'jpg' }, { id: 'foto2', ext: 'jpg' }, { id: 'foto3', ext: 'jpg' }, { id: 'foto4', ext: 'jpg' },
    { id: 'foto5', ext: 'jpg' }, { id: 'foto6', ext: 'jpg' }, { id: 'foto7', ext: 'jpg' }, { id: 'foto8', ext: 'jpg' },
    { id: 'foto9', ext: 'jpg' }, { id: 'foto10', ext: 'jpg' }, { id: 'foto11', ext: 'jpg' }, { id: 'foto12', ext: 'jpg' },
    { id: 'foto13', ext: 'jpg' }, { id: 'foto14', ext: 'jpg' }, { id: 'foto15', ext: 'jpg' }, { id: 'foto16', ext: 'jpg' },
    { id: 'foto17', ext: 'jpg' }, { id: 'foto18', ext: 'jpg' }, { id: 'foto19', ext: 'jpg' }, { id: 'foto20', ext: 'jpg' },
    { id: 'foto21', ext: 'jpg' }, { id: 'foto22', ext: 'jpg' }, { id: 'foto23', ext: 'jpg' }, { id: 'foto24', ext: 'jpg' },
    { id: 'foto25', ext: 'jpg' }, { id: 'foto26', ext: 'jpg' }, { id: 'foto27', ext: 'jpg' }, { id: 'foto28', ext: 'jpg' },
    { id: 'foto29', ext: 'jpg' }, { id: 'foto30', ext: 'jpg' }, { id: 'foto31', ext: 'jpg' }, { id: 'foto32', ext: 'jpg' },
    { id: 'foto33', ext: 'jpg' }, { id: 'foto34', ext: 'jpg' }, { id: 'foto35', ext: 'jpg' }, { id: 'foto36', ext: 'jpg' },
    { id: 'foto37', ext: 'jpg' }, { id: 'foto38', ext: 'jpg' }, { id: 'foto39', ext: 'jpg' }, { id: 'foto40', ext: 'jpg' },
    { id: 'foto41', ext: 'jpg' }, { id: 'foto42', ext: 'jpg' }, { id: 'foto43', ext: 'jpg' }, { id: 'foto44', ext: 'jpg' },
    { id: 'foto45', ext: 'jpg' }, 
    // Imagens com .jpeg (foto46-foto48)
    { id: 'foto46', ext: 'jpeg' }, { id: 'foto47', ext: 'jpeg' }, { id: 'foto48', ext: 'jpeg' },
    // Volta para .jpg
    { id: 'foto49', ext: 'jpg' }, { id: 'foto50', ext: 'jpg' }, { id: 'foto51', ext: 'jpg' }, { id: 'foto52', ext: 'jpg' },
    { id: 'foto53', ext: 'jpg' }, { id: 'foto54', ext: 'jpg' }, { id: 'foto55', ext: 'jpg' }, { id: 'foto56', ext: 'jpg' },
    { id: 'foto57', ext: 'jpg' }, { id: 'foto58', ext: 'jpg' },
    // .jpeg
    { id: 'foto59', ext: 'jpeg' },
    // .jpg
    { id: 'foto60', ext: 'jpg' }, { id: 'foto61', ext: 'jpg' }, { id: 'foto62', ext: 'jpg' }, { id: 'foto63', ext: 'jpg' },
    { id: 'foto64', ext: 'jpg' }, { id: 'foto65', ext: 'jpg' }, { id: 'foto66', ext: 'jpg' }, { id: 'foto67', ext: 'jpg' },
    { id: 'foto68', ext: 'jpg' }, { id: 'foto69', ext: 'jpg' }, { id: 'foto70', ext: 'jpg' }, { id: 'foto71', ext: 'jpg' },
    { id: 'foto72', ext: 'jpg' }, { id: 'foto73', ext: 'jpg' }, { id: 'foto74', ext: 'jpg' }, { id: 'foto75', ext: 'jpg' },
    { id: 'foto76', ext: 'jpg' }, { id: 'foto77', ext: 'jpg' }, { id: 'foto78', ext: 'jpg' }, { id: 'foto79', ext: 'jpg' },
    { id: 'foto80', ext: 'jpg' }, { id: 'foto81', ext: 'jpg' }, { id: 'foto82', ext: 'jpg' }, { id: 'foto83', ext: 'jpg' },
    { id: 'foto84', ext: 'jpg' }, { id: 'foto85', ext: 'jpg' }, { id: 'foto86', ext: 'jpg' }, { id: 'foto87', ext: 'jpg' },
    { id: 'foto88', ext: 'jpg' }, { id: 'foto89', ext: 'jpg' }, { id: 'foto90', ext: 'jpg' }, { id: 'foto91', ext: 'jpg' },
    { id: 'foto92', ext: 'jpg' }, { id: 'foto93', ext: 'jpg' }, { id: 'foto94', ext: 'jpg' }, { id: 'foto95', ext: 'jpg' },
    { id: 'foto96', ext: 'jpg' }, { id: 'foto97', ext: 'jpg' }, { id: 'foto98', ext: 'jpg' }, { id: 'foto99', ext: 'jpg' },
    { id: 'foto100', ext: 'jpg' }, { id: 'foto101', ext: 'jpg' }, { id: 'foto102', ext: 'jpg' }, { id: 'foto103', ext: 'jpg' },
    { id: 'foto104', ext: 'jpg' }, { id: 'foto105', ext: 'jpg' }, { id: 'foto106', ext: 'jpg' }, { id: 'foto107', ext: 'jpg' },
    { id: 'foto108', ext: 'jpg' }, { id: 'foto109', ext: 'jpg' }, { id: 'foto110', ext: 'jpg' }, { id: 'foto111', ext: 'jpg' },
    { id: 'foto112', ext: 'jpg' }, { id: 'foto113', ext: 'jpg' }, { id: 'foto114', ext: 'jpg' },
    // .jpeg (foto115+)
    { id: 'foto115', ext: 'jpeg' },
    // .jpg
    { id: 'foto116', ext: 'jpeg' }, { id: 'foto117', ext: 'jpeg' },
    { id: 'foto118', ext: 'jpg' }, { id: 'foto119', ext: 'jpg' }, { id: 'foto120', ext: 'jpg' }, { id: 'foto121', ext: 'jpg' },
    { id: 'foto122', ext: 'jpg' }, { id: 'foto123', ext: 'jpg' }, { id: 'foto124', ext: 'jpg' }, { id: 'foto125', ext: 'jpg' },
    { id: 'foto126', ext: 'jpg' }, { id: 'foto127', ext: 'jpg' },
    // .jpeg
    { id: 'foto128', ext: 'jpeg' },
    // .jpg
    { id: 'foto129', ext: 'jpg' }, { id: 'foto130', ext: 'jpg' }, { id: 'foto131', ext: 'jpg' },
    // .jpeg
    { id: 'foto132', ext: 'jpeg' }, { id: 'foto133', ext: 'jpeg' }, { id: 'foto134', ext: 'jpeg' }, { id: 'foto135', ext: 'jpeg' },
    { id: 'foto136', ext: 'jpeg' }, { id: 'foto137', ext: 'jpeg' }, { id: 'foto138', ext: 'jpeg' }, { id: 'foto139', ext: 'jpeg' },
    // .jpg
    { id: 'foto140', ext: 'jpeg' }, { id: 'foto141', ext: 'jpeg' }, { id: 'foto142', ext: 'jpeg' },
    { id: 'foto143', ext: 'jpg' }, { id: 'foto144', ext: 'jpg' }, { id: 'foto145', ext: 'jpg' }, { id: 'foto146', ext: 'jpg' },
    { id: 'foto147', ext: 'jpg' }, { id: 'foto148', ext: 'jpg' },
    // .jpeg
    { id: 'foto149', ext: 'jpeg' },
    // .jpg
    { id: 'foto150', ext: 'jpeg' }, { id: 'foto151', ext: 'jpeg' }, { id: 'foto152', ext: 'jpeg' }, { id: 'foto153', ext: 'jpeg' },
    { id: 'foto154', ext: 'jpeg' }, { id: 'foto155', ext: 'jpeg' }, { id: 'foto156', ext: 'jpeg' }, { id: 'foto157', ext: 'jpeg' },
    { id: 'foto158', ext: 'jpeg' }, { id: 'foto159', ext: 'jpeg' }, { id: 'foto160', ext: 'jpeg' }, { id: 'foto161', ext: 'jpeg' },
    { id: 'foto162', ext: 'jpeg' }, { id: 'foto163', ext: 'jpeg' },
    { id: 'foto164', ext: 'jpg' }, { id: 'foto165', ext: 'jpg' }, { id: 'foto166', ext: 'jpg' }, { id: 'foto167', ext: 'jpg' },
    { id: 'foto168', ext: 'jpg' }, { id: 'foto169', ext: 'jpg' }, { id: 'foto170', ext: 'jpg' },
    // .jpeg
    { id: 'foto171', ext: 'jpeg' }, { id: 'foto172', ext: 'jpeg' },
    // .jpg
    { id: 'foto173', ext: 'jpeg' },
    { id: 'foto174', ext: 'jpg' }, { id: 'foto175', ext: 'jpg' }, { id: 'foto176', ext: 'jpg' }, { id: 'foto177', ext: 'jpg' },
    { id: 'foto178', ext: 'jpeg' }, { id: 'foto179', ext: 'jpg' }, { id: 'foto180', ext: 'jpg' }, { id: 'foto181', ext: 'jpg' },
    { id: 'foto182', ext: 'jpg' }, { id: 'foto183', ext: 'jpg' }, { id: 'foto184', ext: 'jpg' }, { id: 'foto185', ext: 'jpg' },
    { id: 'foto186', ext: 'jpg' },
    // .png
    { id: 'foto187', ext: 'png' }, { id: 'foto188', ext: 'png' }, { id: 'foto189', ext: 'png' }, { id: 'foto190', ext: 'png' }
];

// Vídeos
var VIDEOS_CONFIG = [
    { id: 'video1', ext: 'mp4' }, { id: 'video2', ext: 'mp4' }, { id: 'video3', ext: 'mp4' }, { id: 'video4', ext: 'mp4' },
    { id: 'video5', ext: 'mp4' }, { id: 'video6', ext: 'mp4' }, { id: 'video7', ext: 'mp4' }, { id: 'video8', ext: 'mp4' },
    { id: 'video9', ext: 'mp4' }, { id: 'video10', ext: 'mp4' }, { id: 'video11', ext: 'mp4' }, { id: 'video12', ext: 'mp4' },
    { id: 'video13', ext: 'mp4' }
];
